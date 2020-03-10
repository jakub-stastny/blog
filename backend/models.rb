require 'rom'

VALID_LANGS = ['en', 'es']

class SubscriptionRepo < ROM::Relation[:yaml]
  schema do
    attribute :mail, Types::String
    attribute :name, Types::String
    attribute :lang, Types::String
  end
end

def exports.save_subscription(name:, mail:, lang:)
  unless VALID_LANGS.include?(lang)
    raise ArgumentError, "Valid lang values: #{VALID_LANGS.inspect}"
  end

  data = {name: name, mail: mail, lang: lang}
  SubscriptionRepo.changeset(:create, data).commit
end

def exports.list_subscriptions
  # TODO
end

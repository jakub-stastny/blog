require 'rom'

ValidationError = import('./errors.rb').ValidationError

CONFIG = import('./config.rb')

class SubscriptionRepo < ROM::Relation[:yaml]
  schema do
    attribute :mail, Types::String
    attribute :name, Types::String
    attribute :lang, Types::String
  end
end

def exports.save_subscription(name:, mail:, lang:)
  unless CONFIG.supported_languages.include?(lang)
    raise ValidationError.new(field: 'lang', error: 'unsupported')
  end

  unless mail.match(/^.+@.+\..+$/)
    raise ValidationError.new(field: 'mail', error: 'format')
  end

  data = {name: name, mail: mail, lang: lang}
  SubscriptionRepo.changeset(:create, data).commit
end

# TODO: implement me.
def exports.list_subscriptions
  raise NotImplementedError
end

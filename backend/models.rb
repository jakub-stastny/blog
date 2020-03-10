require 'rom'

ValidationError = import('./errors.rb').ValidationError
config = import('./config.rb')

class SubscriptionRepo < ROM::Relation[:yaml]
  schema do
    attribute :mail, Types::String
    attribute :name, Types::String
    attribute :lang, Types::String
  end
end

def exports.save_subscription(name:, mail:, lang:)
  unless config.supported_languages.include?(lang)
    raise ArgumentError, "Supported languages: #{config.supported_languages.inspect}"
  end

  unless mail.match(/^.+@.+\..+$/)
    raise ValidationError.new(field: 'mail', error: 'format')
  end

  data = {name: name, mail: mail, lang: lang}
  SubscriptionRepo.changeset(:create, data).commit
end

def exports.list_subscriptions
  # TODO
end

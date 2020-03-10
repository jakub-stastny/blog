require 'rom'

class SubscriptionRepo < ROM::Relation[:yaml]
  schema do
    attribute :mail, Types::String
    attribute :name, Types::String
  end
end

def exports.save_subscription(name:, mail:)
  data = {name: name, mail: mail}
  SubscriptionRepo.changeset(:create, data).commit
end

def exports.list_subscriptions
end

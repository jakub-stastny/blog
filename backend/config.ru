require 'import'

#models = import('./models.rb')

run lambda { |env|
  case env['REQUEST_METHOD']
  when 'POST'
    case env['PATH_INFO'].chomp('/')
    when '/subscribe'
      raw_data = env['rack.input'].read
      # TODO: Log into a logger, so the data can be found even if the app crashes.
      data = JSON.parse(raw_data).reduce(Hash.new) { |buffer, (key, value)| buffer.merge(key.to_sym => value) }
      subscription = models.save_subscription(**data)
      [201, {'Content-Type' => 'application/json'}, [subscription.to_json]]
    # else
    #   not_found
    end
  when 'GET'
    case env['PATH_INFO'].chomp('/')
    when '/subscriptions'
      # TODO: Auth.
      [200, {'Content-Type' => 'application/json'}, [models.list_subscriptions.to_json]]
    # else
    #   not_found
    end
  else
    # TODO: No PUT etc.
  end
}

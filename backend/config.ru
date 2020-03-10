require 'import'

models = import('./models.rb')

run lambda { |env|
  case env['REQUEST_METHOD']
  when 'POST'
    case env['PATH_INFO'].chomp('/')
    when '/subscribe'
      subscription = models.save_subscription(env[''])
      [201, {'Content-Type' => 'application/json'}, [subscription.to_json]]
    # else
    #   not_found
    end
  when 'GET'
    case env['PATH_INFO'].chomp('/')
    when '/subscriptions'
      [200, {'Content-Type' => 'application/json'}, [models.list_subscriptions.to_json]]
    # else
    #   not_found
    end
  else
    # TODO: No PUT etc.
  end
}

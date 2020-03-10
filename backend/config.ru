require 'import'
require 'json'

#models = import('./models.rb')
ValidationError = import('./errors.rb').ValidationError

def build_response(status, object)
  [status, {'Content-Type' => 'application/json'}, [object.to_json]]
end

run lambda { |env|
  begin
    response = case env['REQUEST_METHOD']
    when 'POST'
      case env['PATH_INFO'].chomp('/')
      when '/subscribe'
        raw_data = env['rack.input'].read
        puts "New subscription: #{raw_data}"
        data = JSON.parse(raw_data).reduce(Hash.new) { |buffer, (key, value)| buffer.merge(key.to_sym => value) }
        subscription = models.save_subscription(**data)
        build_response(201, subscription)
      end
    when 'GET'
      case env['PATH_INFO'].chomp('/')
      when '/subscriptions'
        # TODO: Auth.
        build_response(200, models.list_subscriptions)
      end
    end

    response || build_response(404, message: "not found")
  rescue ValidationError => error
    build_response(400, error)
  rescue => error
    build_response(500, message: "#{error.class}: #{error.message}", backtrace: error.backtrace)
  end
}

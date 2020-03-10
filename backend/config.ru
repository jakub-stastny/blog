require 'import'
require 'rom'
require 'json'

ROM.container(:yaml, File.expand_path('../data', __FILE__))

models = import('./models.rb')
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
        data = JSON.parse(raw_data, symbolize_names: true)
        subscription = models.save_subscription(**data)
        puts "HTTP 201 #{subscription.to_json}"
        build_response(201, subscription)
      end
    when 'GET'
      case env['PATH_INFO'].chomp('/')
      when '/subscriptions'
        # TODO: Auth.
        subscriptions = models.list_subscriptions
        puts "HTTP 200 #{subscriptions.to_json}"
        build_response(200, subscriptions)
      end
    end

    response || p(build_response(404, message: "not found"))
  rescue ValidationError => error
    puts "HTTP 400 #{error.to_json}"
    build_response(400, error)
  rescue => error
    puts "HTTP 500 #{error.inspect}"
    build_response(500, message: "#{error.class}: #{error.message}", backtrace: error.backtrace)
  ensure
    puts
  end
}

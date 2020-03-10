require 'import'
require 'rom'
require 'rspec-sane-http'

ROM.container(:yaml, '/tmp')

RSpec.configure do |config|
  config.extend(HttpApi::Extensions)
  config.add_setting(:base_url)
  config.base_url = 'http://localhost:5000'
end


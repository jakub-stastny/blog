require 'ostruct'
require 'json'

OpenStruct.new(
  supported_languages: JSON.parse(ENV.fetch('SUPPORTED_LANGUAGES') { '["en", "es"]' })
)

require 'ostruct'
require 'json'

export do
  OpenStruct.new(
    supported_languages: JSON.parse(ENV.fetch('SUPPORTED_LANGUAGES') { '["en", "es"]' })
  )
end

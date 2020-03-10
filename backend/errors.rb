# Only for errors that are actually meant to be communicated to the end user.
class ValidationError < StandardError
  def initialize(field: , error:)
    @field, @error = field, error
  end

  def to_json
    {field: @field, error: @error}.to_json
  end
end

require File.expand_path('../spec_helper.rb', __FILE__)

shared_examples_for("an unsupported route") do
  it "returns an unsupported route", data: '' do
    expect(response.code).to eql(404)
    expect(response_data).to eql(message: "not found")
  end
end

describe 'POST /subscribe' do
  context "invalid data" do
    let(:request_data) {{
      name: "Joe Doe", lang: "en"
    }}

    it "returns HTTP 400 and the validation error" do
      p response
      expect(response.code).to eql(400)
    end
  end

  context "valid data" do
    let(:request_data) {{
      name: "Joe Doe", mail: "joe@doe.com", lang: "en"
    }}

    it "returns HTTP 400 and the validation error" do
      p response
      expect(response.code).to eql(201)
    end
  end
end

describe 'GET /subscriptions' do
  context "inauthenticated request" do
    # TODO
  end

  context "authenticated request" do
    # TODO
  end
end

describe 'GET /test' do
  it_behaves_like "an unsupported route"
end

describe 'POST /test', data: '' do
  it_behaves_like "an unsupported route"
end

describe 'PUT /test', data: '' do
  it_behaves_like "an unsupported route"
end

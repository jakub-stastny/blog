require File.expand_path('../spec_helper.rb', __FILE__)

shared_examples_for("an unsupported route") do
  it "returns an unsupported route", data: '' do
    expect(response.code).to eql(404)
    expect(response_data).to eql(message: "not found")
  end
end

describe 'POST /subscribe' do
  context "invalid data" do
    # TODO
  end

  context "valid data" do
    # TODO
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

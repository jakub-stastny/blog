require File.expand_path('../spec_helper.rb', __FILE__)

models = import('../models.rb')

describe '#save_subscription' do
  it "requires name to be present" do
    expect { models.save_subscription(mail: "joe@doe.com") }.to raise_error(ArgumentError, /missing.*name/)
  end

  it "requires mail to be present" do
    expect { models.save_subscription(name: "Joe Doe") }.to raise_error(ArgumentError, /missing.*mail/)
  end

  it "requires lang to be present" do
    expect { models.save_subscription(name: "Joe Doe", mail: "joe@doe.com") }.to raise_error(ArgumentError, /missing.*lang/)
  end

  it "requires lang to be one of the allowed values" do
    expect { models.save_subscription(name: "Joe Doe", mail: "joe@doe.com", lang: "pt") }.to raise_error(ArgumentError, /Valid lang values:/)
  end

  it "allows name, mail and langto be saved" do
    models.save_subscription(name: "Joe Doe", mail: "joe@doe.com", lang: 'en')
  end
end

describe '#list_subscriptions' do
  # TODO
end

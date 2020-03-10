require File.expand_path('../spec_helper.rb', __FILE__)

models = import('../models.rb')

describe '#save_subscription' do
  it "requires name to be present" do
    expect { models.save_subscription(mail: "joe@doe.com") }.to raise_error(ArgumentError, /missing keyword: name/)
  end

  it "requires mail to be present" do
    expect { models.save_subscription(name: "Joe Doe") }.to raise_error(ArgumentError, /missing keyword: mail/)
  end

  it "allows name and mail to be saved" do
    models.save_subscription(name: "Joe Doe", mail: "joe@doe.com")
  end
end

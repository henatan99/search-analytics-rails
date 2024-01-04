require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) do
    described_class.new(
      email: 'hhhabb@yahoo.com',
      password: 'sassdfh@ajs2',
    )
  end

  it "is valid with valid attributes" do
    expect(user).to be_valid
  end

  it "is not valid without an email" do
    user.email = nil
    expect(user).to_not be_valid
  end

  it "is not valid without a password" do
    user.password = nil
    expect(user).to_not be_valid
  end
end

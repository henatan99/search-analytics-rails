require 'rails_helper'

RSpec.describe Search, type: :model do
  let(:user) { User.create(id: 1, email: 'hhabbb@yahoo.com', password: 'sadhasfh') }
  let(:ip_address) { IpAddress.create(id: 1, address: '192.168.1.1') }
  let(:search) do
    described_class.new(
      query: 'My query string',
      user_id: user.id,
      ip_address_id: ip_address.id
    )
  end

  it "is valid with valid attributes" do 
    expect(search).to be_valid
  end

  it "is not valid without query" do
    search.query = nil
    expect(search).to_not be_valid
  end

  it "is valid without a user association" do
    search.user_id = nil
    expect(search).to be_valid
  end

  it "is not valid without a ip_address association" do
    search.ip_address_id = nil
    expect(search).to_not be_valid
  end
end

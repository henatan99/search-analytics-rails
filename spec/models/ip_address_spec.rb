require 'rails_helper'

RSpec.describe IpAddress, type: :model do
  let(:ip_address) do
    described_class.new(
      address: '192.168.1.1',
    )
  end

  it "is valid with valid attributes" do 
    expect(ip_address).to be_valid
  end

  it "is not valid without address" do
    ip_address.address = nil
    expect(ip_address).to_not be_valid
  end

  it "is valid with correct IP address format" do 
    ip_address.address = "192.168.1.1"
    expect(ip_address).to be_valid
  end

  it "is not valid with invalid format (should be ipv4 or ipv6 format)" do
    invalid_addresses = ["2.3.3", "wrong", "125.163.1.154.32", "1000:20df:5604"]

    invalid_addresses.each do |address|
      ip_address.address = address
      expect(ip_address).to_not be_valid
    end
  end
end

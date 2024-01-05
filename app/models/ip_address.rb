class IpAddress < ApplicationRecord
    has_many :searches, dependent: :destroy

    validates_uniqueness_of :address
    validates :address, presence: true, format: { with: /\A(?:[0-9]{1,3}\.){3}[0-9]{1,3}\z|\A(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}\z/, message: 'Invalid IP address format' }
end

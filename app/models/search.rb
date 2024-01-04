class Search < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :ip_address

  validates :query, presence: true, length: {minimum: 1}
end

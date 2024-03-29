class Article < ApplicationRecord
  belongs_to :user

  validates :title, presence:true, length: { minimum: 2, maximum: 250 }
  validates :body, presence:true, length: { minimum: 10 }

  def self.search(query)
    where('lower(title) LIKE :query OR lower(body) LIKE :query', query: "%#{query.downcase}%")
  end
end

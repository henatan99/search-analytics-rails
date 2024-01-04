require 'rails_helper'

RSpec.describe Article, type: :model do
  let(:user) { User.create(id: 1, email: 'hhabbb@yahoo.com', password: 'sadhasfh') }
  let(:article) do
    described_class.new(
      title: 'My Title',
      user_id: user.id,
      body: 'This is the body of the article'
    )
  end

  it "is valid with valid attributes" do 
    expect(article).to be_valid
  end

  it "is not valid without title" do
    article.title = nil
    expect(article).to_not be_valid
  end

  it "is not valid without body" do
    article.body = nil
    expect(article).to_not be_valid
  end

  it "is not valid without a user association" do
    user.id = nil
    expect(article).to_not be_valid
  end
end

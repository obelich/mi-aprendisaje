FactoryBot.define do
  factory :product do
    name { Faker::Book.title }
    description { Faker::Lorem.sentence(word_count: 50) }
    price { rand(1..10000) }
    store
  end
end

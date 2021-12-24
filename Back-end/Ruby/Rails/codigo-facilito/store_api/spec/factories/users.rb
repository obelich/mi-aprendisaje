FactoryBot.define do
  factory :user do
    email { "obelich@MyString.com" }
    age { 18 }
    password_digest { "MyString" }
    type { "test" }
    store
  end

  factory :user_correct, class: 'User' do
    email { "obelich@MyString.com" }
    age { 18 }
    password_digest { "MyString" }
    type { "test" }
  end
end

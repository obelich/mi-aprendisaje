require 'rails_helper'

RSpec.describe Token, type: :model do

  describe 'Validacion del model token' do

    subject { build(:token)}

    it 'Validar si el token esta presente' do
      should validate_presence_of(:token)
    end

    it 'Validar si el user_id esta presente' do
      should validate_presence_of(:user_id)
    end

    it 'Validar si el expirate_at esta presente' do
      should validate_presence_of(:expires_at)
    end
    it 'Validar existe relacion con user' do
      should belong_to(:user)
    end


  end

end

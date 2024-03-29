require 'rails_helper'

RSpec.describe Owner, type: :model do
  describe 'Validaciones del modelo Owner' do
    subject { build(:owner) }

    it 'Validar que solo se pueden crear propietarios' do
      should validate_inclusion_of(:type).in_array(%w[Employee Owner])
    end

    it 'Validar si existe ralacion con store' do
      should belong_to(:store)
    end

  end
end

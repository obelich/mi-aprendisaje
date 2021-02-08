# frozen_string_literal: true

class RegistrationsController < ApplicationController

  def new
    @user = User.new
  end

end
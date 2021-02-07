# frozen_string_literal: true

class MainController < ApplicationController

  def index
    flash.now[:notice] = "Logged in successfully"
    flash.now[:alert] = "invalid email or password"
  end

end
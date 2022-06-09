class ApplicationController < ActionController::API
  def vehicles
    render json: { name: 'Tesla Model 3' }
  end
end

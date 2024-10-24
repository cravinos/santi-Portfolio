# config/routes.rb
Rails.application.routes.draw do
  # Keep the health check route
  get "up" => "rails/health#show", as: :rails_health_check

  # Add your API routes
  namespace :api do
    namespace :v1 do
      resources :form_submissions, only: [:create]
    end
  end
end
# backend/config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins ['http://localhost:3000', 'https://cravinos.dev']
      resource '*',
        headers: :any,
        methods: [:post, :options]
    end
  end
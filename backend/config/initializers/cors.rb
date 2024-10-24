# backend/config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins ['http://localhost:3000', 'https://santi-portfolio.vercel.app']
      resource '*',
        headers: :any,
        methods: [:post, :options]
    end
  end
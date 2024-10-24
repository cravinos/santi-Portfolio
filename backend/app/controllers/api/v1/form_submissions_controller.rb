# backend/app/controllers/api/v1/form_submissions_controller.rb
class Api::V1::FormSubmissionsController < ApplicationController
    def create
      submission = FormSubmission.new(form_params)
      
      if submission.save
        render json: { 
          message: 'Form submitted successfully',
          data: submission 
        }, status: :created
      else
        render json: { 
          errors: submission.errors.full_messages 
        }, status: :unprocessable_entity
      end
    end
  
    private
  
    def form_params
      params.require(:form_submission).permit(:name, :email, :message)
    end
  end
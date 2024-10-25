class Api::V1::FormSubmissionsController < ApplicationController
    def create
      submission = FormSubmission.new(form_params)
      
      if submission.save
        # Send email notification
        ContactMailer.form_submission(submission).deliver_later
        
        render json: { message: 'Form submitted successfully' }, status: :created
      else
        render json: { errors: submission.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def form_params
      params.require(:form_submission).permit(:name, :email, :message)
    end
  end
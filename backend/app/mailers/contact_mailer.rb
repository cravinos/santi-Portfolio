# app/mailers/contact_mailer.rb
class ContactMailer < ApplicationMailer
  default from: 'biggest.wasteman@gmail.com'  # Gmail account that sends the emails

  def form_submission(submission)
    @submission = submission
    mail(
      to: 'santiago.cravino@me.com',  # Your preferred receiving email
      reply_to: @submission.email,
      subject: "New Contact Form Submission from #{@submission.name}"
    )
  end
end
require "test_helper"

class ContactMailerTest < ActionMailer::TestCase
  test "form_submission" do
    mail = ContactMailer.form_submission
    assert_equal "Form submission", mail.subject
    assert_equal [ "to@example.org" ], mail.to
    assert_equal [ "from@example.com" ], mail.from
    assert_match "Hi", mail.body.encoded
  end
end

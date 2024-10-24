class CreateFormSubmissions < ActiveRecord::Migration[7.2]
  def change
    create_table :form_submissions do |t|
      t.string :name
      t.string :email
      t.text :message

      t.timestamps
    end
  end
end

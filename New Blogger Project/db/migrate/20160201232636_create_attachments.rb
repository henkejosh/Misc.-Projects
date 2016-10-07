class CreateAttachments < ActiveRecord::Migration
  def change
    create_table :attachments do |t|
      t.references :article, index: true, foreign_key: true
      t.string :title
      t.text :body

      t.timestamps null: false
    end
  end
end

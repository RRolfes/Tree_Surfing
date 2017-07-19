class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :full_name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :city, null: false
      t.string :country, null: false
      t.string :occupation
      t.string :image_url
      t.integer :age
      t.text :about
      t.boolean :host, null: false

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true

  end
end

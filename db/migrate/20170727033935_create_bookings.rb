class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :tree_house_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.boolean :confirmed, null: false

      t.timestamps
    end

    add_index :bookings, :user_id
    add_index :bookings, :tree_house_id

  end
end

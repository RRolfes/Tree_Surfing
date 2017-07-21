class CreateTreeHouses < ActiveRecord::Migration[5.0]
  def change
    create_table :tree_houses do |t|
      t.integer :user_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :city, null: false
      t.string :country, null: false
      t.string :image_url

      t.timestamps
    end

    add_index :tree_houses, :user_id
  end
end

class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :tree_house_id, null: false
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :comment, null: false

      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :tree_house_id
  end
end

class AddMaxGuestsToTreeHouses < ActiveRecord::Migration[5.0]
  def change
    add_column :tree_houses, :max_guests, :integer
  end
end

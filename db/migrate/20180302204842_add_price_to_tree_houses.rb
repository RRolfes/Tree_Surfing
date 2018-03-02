class AddPriceToTreeHouses < ActiveRecord::Migration[5.0]
  def change
    add_column :tree_houses, :price, :integer
  end
end

class AddStateAndNameToTreeHouses < ActiveRecord::Migration[5.0]
  def change
    add_column :tree_houses, :name, :string, null: false
    add_column :tree_houses, :state, :string
  end
end

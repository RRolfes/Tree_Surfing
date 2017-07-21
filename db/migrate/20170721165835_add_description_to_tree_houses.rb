class AddDescriptionToTreeHouses < ActiveRecord::Migration[5.0]
  def change
    add_column :tree_houses, :description, :string
  end
end

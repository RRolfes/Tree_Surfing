class ChangeThDescriptionToText < ActiveRecord::Migration[5.0]
  def change
    change_column :tree_houses, :description, :text
  end
end

class AddColumnsToTreeHouses < ActiveRecord::Migration[5.0]
  def change
    add_column :tree_houses, :rating, :string
    add_column :tree_houses, :bed, :boolean
    add_column :tree_houses, :water, :boolean
    add_column :tree_houses, :electricity, :boolean
    add_column :tree_houses, :check_in, :string
    add_column :tree_houses, :check_out, :string
    add_column :tree_houses, :cancellation_policy, :string
    add_column :tree_houses, :on_arrival, :string
    add_column :tree_houses, :minimum_nights, :string
    add_column :tree_houses, :accepts_bookings, :string
    add_column :tree_houses, :toilets, :boolean
    add_column :tree_houses, :showers, :boolean
    add_column :tree_houses, :picnic_table, :boolean
    add_column :tree_houses, :trash, :boolean
    add_column :tree_houses, :wifi, :boolean
    add_column :tree_houses, :biking, :boolean
    add_column :tree_houses, :boating, :boolean
    add_column :tree_houses, :fishing, :boolean
    add_column :tree_houses, :hiking, :boolean
    add_column :tree_houses, :horseback, :boolean
    add_column :tree_houses, :paddling, :boolean
    add_column :tree_houses, :swimming, :boolean
    add_column :tree_houses, :wildlife_watching, :boolean
    add_column :tree_houses, :climbing, :boolean
  end
end

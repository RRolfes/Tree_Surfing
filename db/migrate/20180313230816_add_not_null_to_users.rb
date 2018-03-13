class AddNotNullToUsers < ActiveRecord::Migration[5.0]
  def change
    change_column_null :users, :first, false
    change_column_null :users, :last, false
  end
end

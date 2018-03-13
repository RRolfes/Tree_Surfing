class RemoveFullNameGenderHostFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :full_name, :string
    remove_column :users, :gender, :string
    remove_column :users, :host, :string
  end
end

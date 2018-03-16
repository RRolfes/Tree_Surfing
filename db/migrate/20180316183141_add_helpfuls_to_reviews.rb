class AddHelpfulsToReviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :helpfuls, :integer
  end
end

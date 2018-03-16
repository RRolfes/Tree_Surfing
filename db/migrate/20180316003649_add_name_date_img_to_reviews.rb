class AddNameDateImgToReviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :img_url, :string
    add_column :reviews, :date, :string
    add_column :reviews, :reviewer_name, :string
  end
end

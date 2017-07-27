class Review < ApplicationRecord
  validates :tree_house_id, :user_id, :title, :comment, presence: true

  belongs_to :tree_house
  belongs_to :user

end

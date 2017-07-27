class Booking < ApplicationRecord
  validates :tree_house_id, :user_id, :start_date, :end_date, :confirmed, presence: true

  belongs_to :tree_house
  belongs_to :user
end

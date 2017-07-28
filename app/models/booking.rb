class Booking < ApplicationRecord
  validates :tree_house_id, :user_id, :start_date, :end_date, presence: true
  validates :confirmed, inclusion: { in: [true, false] }

  belongs_to :tree_house
  belongs_to :user
end

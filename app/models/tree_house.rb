class TreeHouse < ApplicationRecord
  validates :user_id, :lat, :lng, :city, :country, :name, presence: true

  # has_many :reviews
  # has_many :bookings
  # belongs_to :user

  def self.in_bounds(bounds)
  self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end
end

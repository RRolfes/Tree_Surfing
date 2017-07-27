json.extract! tree_house, :id, :user_id, :lat, :lng, :city, :state, :country, :name, :image_url

json.reviews do
  json.partial! 'api/reviews/review', collection: tree_house.reviews, as: :review
end

json.bookings do
  json.partial! 'api/bookings/booking', collection: tree_house.bookings, as: :booking
end

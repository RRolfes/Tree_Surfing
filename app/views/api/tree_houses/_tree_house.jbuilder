json.extract! tree_house, :id,
                          :user_id, :lat, :lng, :city, :state,
                          :country, :name, :image_url, :rating,
                          :bed, :water, :electricity, :description,
                          :check_in, :check_out, :cancellation_policy,
                          :on_arrival, :minimum_nights, :accepts_bookings,
                          :toilets, :showers, :picnic_table, :trash, :wifi,
                          :biking, :boating, :fishing, :hiking, :horseback,
                          :paddling, :swimming, :wildlife_watching, :climbing, :price

json.reviews do
  json.partial! 'api/reviews/review', collection: tree_house.reviews, as: :review
end

json.bookings do
  json.partial! 'api/bookings/booking', collection: tree_house.bookings, as: :booking
end

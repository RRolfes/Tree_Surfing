class Api::BookingsController < ApplicationController

  # this would be a treehouse's bookings
  # def index
  #   @bookings = Booking.where(tree_house_id: booking_params[tree_house_id])
  # end

  def create
    @booking = Review.new(booking_params)

    if @booking.save
      render :show
    else
      render json: @booking, status: :unprocessable_entity
    end
  end

  private

  def booking_params
    params.require(:booking).permit(
      :start_date,
      :end_dat,
      :user_id,
      :tree_house_id,
      :confirmed
    )
  end
end

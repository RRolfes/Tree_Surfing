class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)

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
      :end_date,
      :user_id,
      :tree_house_id,
      :confirmed
    )
  end
end

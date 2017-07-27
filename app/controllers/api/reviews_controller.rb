class Api::ReviewsController < ApplicationController

  # def index
  #   @reviews = Review.where(tree_house_id: booking_params[tree_house_id])
  # end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:title, :comment, :user_id, :tree_house_id)
  end
end

class Api::TreeHousesController < ApplicationController
  def create
    @tree_house = TreeHouse.new(tree_house_params)

    if @tree_house.save
      render #path
    else
      render jason: @tree_house.errros.full_messages, status: 422
    end
  end

  def index
    @tree_houses = TreeHouse.all
  end

  def show
    @tree_house = TreeHouse.find
  end

  private

  def tree_house_params
    params.require(:tree_house).permit(
    :user_id,
    :lng,
    :lat,
    :city,
    :country,
    :description,
    :image_url
    )
  end
end

class Api::TreeHousesController < ApplicationController
  def create
    @tree_house = TreeHouse.new(tree_house_params)

    if @tree_house.save
      render 'api/tree_houses/show'
    else
      render json: @tree_house.errros.full_messages, status: 422
    end
  end

  # def index
  #   @tree_houses = TreeHouse.all
  #   render 'api/tree_houses/index'
  # end

  def index
    @tree_houses = bounds ? TreeHouse.in_bounds(bounds) : TreeHouse.all
    render :index
  end

  def show
    @tree_house = TreeHouse.find(params[:id])
    render 'api/tree_houses/show'
  end

  private

  def tree_house_params
    params.require(:tree_house).permit(
      :user_id,
      :lat,
      :lng,
      :city,
      :sate,
      :country,
      :name,
      :description,
      :image_url
    )
  end

  def bounds
    params[:bounds]
  end
end

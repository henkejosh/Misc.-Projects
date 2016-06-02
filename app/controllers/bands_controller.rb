class BandsController < ApplicationController
  before_action :require_login
  
  def new
    @band = Band.new
    render :new
  end

  def edit
  end

  def show
    @band = Band.find(params[:id])
    render :show
  end

  def update
  end

  def destroy

  end

  def create
    @band = Band.new(band_params)
    if @band.save
      redirect_to band_url(@band.id)
    else
      flash[:errors] = @band.errors.full_messages
      render :new
    end
  end

  private
  def band_params
    params.require(:band).permit(:name)
  end
end

class AlbumsController < ApplicationController
  before_action :require_login
  
  def new
    @album = Album.new
    render :new
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      redirect_to album_url(@album.id)
    else
      flash[:errors] = @album.errors.full_messages
      render :new
    end
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  private
  def album_params
    params.require(:album).permit(:name, :band_id, :recording_type)
  end
end

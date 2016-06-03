class TracksController < ApplicationController
  before_action :require_login

  def new
    @track = Track.new
    render :new
  end

  def edit
    @track = Track.find(params[:id])
    render :edit
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      redirect_to band_album_track_url(@track.id)
    else
      flash[:errors] = @track.errors.full_messages
      render :new
    end
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  private
  def track_params
    params.require(:track).permit(:name, :album_id, :track_type, :lyrics)
  end
end

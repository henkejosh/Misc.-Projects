class NotesController < ApplicationController

  def new
    @note = Note.new
    render :new
  end

  def edit
  end

  def show
    @note = Note.find(params[:id])
    render :show
  end

  def update
  end

  def destroy
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      redirect_to band_album_track_url(@note.track_id)
    else
      flash[:errors] = @note.errors.full_messages
      render :new
    end
  end

  private
  def band_params
    params.require(:note).permit(:track_id, :user_id, :body)
  end

end

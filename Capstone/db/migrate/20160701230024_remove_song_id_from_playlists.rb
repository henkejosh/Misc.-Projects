class RemoveSongIdFromPlaylists < ActiveRecord::Migration
  def change
    remove_column :playlists, :song_id
  end
end

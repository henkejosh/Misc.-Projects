const Dispatcher = require('../dispatcher/dispatcher.js');
const SongApiUtil = require('../util/song_api_util.js');
const SongConstants = require('../constants/song_constants.js');

const SongActions = {
  getAllSongs: function() {
    SongApiUtil.getAllSongs(this.receiveSongs);
  },

  getSongs: function() {

  },

  receiveSongs: function(songs) {
    Dispatcher.dispatch({
      actionType: SongConstants.GET_SONGS,
      songs: songs
    });
  }
};

module.exports = SongActions;

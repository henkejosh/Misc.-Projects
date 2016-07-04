const React = require('react');
const CommentForm = require('./comment_form.jsx');
const CurrentSongStore = require('../stores/current_song_store.js');
const CurrentSongActions = require('../actions/current_song_actions');


const SongIndexItem = React.createClass({
  getInitialState: function() {
    return { shown: "none"};
  },

  handleCommentForm: function(event) {
    event.preventDefault();

    let displayAtt;
    if(this.state.shown === "none") {
      displayAtt = "block";
    } else {
      displayAtt = "none";
    }
    this.setState({ shown: "block"});
  },

  handleSongPlay: function(e) {
    e.preventDefault();
    CurrentSongActions.selectCurrentSong(this.props.song.id);
  },

  render: function() {
    return (
      <figure>

        <img alt={this.props.song.album_name}
          src={this.props.song.image_url}/>

        <section className="song">

          <div>
            <button onClick={this.handleSongPlay}
              className="play-button">Play</button>
            <ul className="song-info">
              <li>{this.props.song.title}</li>
              <li>{this.props.song.artist_name}</li>
              <li>{this.props.song.album_name}</li>
            </ul>
          </div>

          <ul className="song-button-feats">
            <li onClick={this.handleCommentForm}>
              <CommentForm displayProp={this.state.shown}/>
            </li>
            <li>Like</li>
            <li>Add to PL</li>
          </ul>
        </section>
      </figure>
    );
  }
});

module.exports = SongIndexItem;

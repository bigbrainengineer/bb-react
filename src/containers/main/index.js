import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from './search';
import {
  searchAsync,
  updateSearchText,
  loadVideo,
  searchVideos,
  addToPlaylist,
  addInPlaylistAsync,
} from '../../modules/main';


const Main = props => (
  <div>
    <Search {...props} />
  </div>
);

const mapStateToProps = state => ({
  search: {
    videos: state.main.search.videos,
    video: state.main.search.video,
    showLoader: state.main.search.showLoader,
    text: state.main.search.text,
  },
  playlist: {
    categories: state.main.playlist.categories,
    added: state.main.playlist.added,
    currentVideo: state.main.playlist.currentVideo,
    showCategories: state.main.playlist.showCategories,
    videos: state.main.playlist.videos,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  searchAsync,
  updateSearchText,
  loadVideo,
  searchVideos,
  addToPlaylist,
  addInPlaylistAsync,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);


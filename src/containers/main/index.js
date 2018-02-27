import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from './search';
import {
  searchAsync,
  updateSearchText,
  loadVideo,
} from '../../modules/main';


const Main = props => (
  <Search {...props} />
);

const mapStateToProps = (state) => {
  return ({
    videos: state.main.search.videos,
    video: state.main.search.video,
    showLoader: state.main.search.showLoader,
    text: state.main.search.text,
  });
}

const mapDispatchToProps = dispatch => bindActionCreators({
  searchAsync,
  updateSearchText,
  loadVideo,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);


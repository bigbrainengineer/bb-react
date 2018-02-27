import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from './search';
import {
  searchAsync,
  updateSearchText,
} from '../../modules/main';


const Main = props => (
  <Search {...props} />
);

const mapStateToProps = state => {
  return ({
    videos: state.main.search.videos,
    showLoader: state.main.search.showLoader,
    searchText: state.main.search.searchText,
  });
}

const mapDispatchToProps = dispatch => bindActionCreators({
  searchAsync,
  updateSearchText,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);


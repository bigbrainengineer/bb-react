import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from './search';
import {
    searchAsync,
    updateSearchText
} from '../../modules/main'


const Main = props => (
    <Search {...props}/>
);

const mapStateToProps = state => {
    return ({
        searchResult: state.main.search.searchResult,
        showLoader: state.main.search.showLoader,
    });
}

const mapDispatchToProps = dispatch => bindActionCreators({
    searchAsync,
    updateSearchText,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)


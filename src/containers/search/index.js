import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    searchAsync,
    updateSearchText
} from '../../modules/search'


const Search = props => (
    <div>
        <input type="text" onChange={props.updateSearchText}/>
        <button onClick={props.searchAsync}>search</button>
        <ShowLoader showLoader={props.showLoader} data={<PlayList playList={props.playList}/>}/>
    </div>
)

const PlayList = props => (
    props.playList.map(({id, value}) =>
        <li key={id}>{value}</li>
    )
)

const ShowLoader = props => (
    <div>{props.showLoader ? 'loading...' : props.data}</div>
)

const mapStateToProps = state => ({
    serch: state.search.search,
    playList: state.search.playList,
    showLoader: state.search.showLoader,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    searchAsync,
    updateSearchText,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)


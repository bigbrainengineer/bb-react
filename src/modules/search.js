export const SEARCH = 'search/SEARCH';
export const SEARCH_CHANGE = 'search/SEARCH_CHANGE';
export const SEARCH_REQUESTED = 'search/SEARCH_REQUESTED';

const initialState = {
    searchText : '',
    playList: [],
    showLoader: false
}

const playList = [
    {id: 1, value: 'Playlist 1'},
    {id: 2, value: 'Playlist 2'},
    {id: 3, value: 'Playlist 3'},
    {id: 4, value: 'Playlist 4'}
]

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REQUESTED:
            return {
                ...state,
                showLoader: true
            }
        case SEARCH:
            return {
                ...state,
                playList: playList,
                showLoader: false
            }
        case SEARCH_CHANGE:
            return {
                ...state,
                searchText: action.text
            }

        default:
            return state
    }
}


export const searchAsync = () => {
    return dispatch => {
        dispatch({
            type: SEARCH_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: SEARCH
            })
        }, 1000)
    }
}

export const updateSearchText = (e) => {
    return dispatch => {
        dispatch({
            type: SEARCH_CHANGE,
            text: e.target.value
        })
    }
}

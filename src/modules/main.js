export const SEARCH = 'main/SEARCH';
export const SEARCH_CHANGE = 'main/SEARCH_CHANGE';
export const SEARCH_REQUESTED = 'main/SEARCH_REQUESTED';

const initialState = {
    search: {
        searchText : '',
        searchResult: [],
        showLoader: false
    }
}

const playList = [
    {id: 1, src: 'https://www.youtube.com/embed/Cy0ABjAP0TI'},
    {id: 2, src: 'https://www.youtube.com/embed/_FrOQC-zEog'},
    {id: 3, src: 'https://www.youtube.com/embed/ojf18wT_Xtk'},
    {id: 4, src: 'https://www.youtube.com/embed/yjoPWxmOCtc'}
]

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REQUESTED:
            return {
                ...state,
                search: {
                    ...state.search,
                    showLoader: true
                }
            }
        case SEARCH:
            return {
                ...state,
                search: {
                    ...state.search,
                    searchResult: playList,
                    showLoader: false
                }
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

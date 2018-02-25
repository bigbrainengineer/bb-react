export const SEARCH = 'main/SEARCH';
export const SEARCH_CHANGE = 'main/SEARCH_CHANGE';
export const SEARCH_REQUESTED = 'main/SEARCH_REQUESTED';
export const YOUTUBE_API_KEY = 'AIzaSyA4w7kvBhINrYAmuZbYb6oxC9BknMU393Q';
export const YOUTUBE_VIDEOS_LIMIT = 20;



const initialState = {
    search: {
        searchText : '',
        searchResult: [],
        showLoader: false,
    }
}


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
                    searchResult: action.results,
                    showLoader: false
                }
            }
        case SEARCH_CHANGE:
            return {
                ...state,
                search: {
                    ...state.search,
                    searchText: action.text
                }
            }

        default:
            return state
    }
}


export const searchAsync = (searchText) => {
    return dispatch => {
        dispatch({
            type: SEARCH_REQUESTED
        });
        let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet,id&q=${searchText}&maxResults=${YOUTUBE_VIDEOS_LIMIT}`
        return fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                const results = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
                dispatch({
                    type: SEARCH,
                    results: results.map((url, index) => ({
                        id: index,
                        src: url
                    }))
                });
            })
            .catch((error) => {
                //@todo implemet some logic here
                //console.error(error);
            });
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

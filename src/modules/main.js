import fetch from 'isomorphic-fetch';

export const SEARCH = 'main/SEARCH';
export const SEARCH_CHANGE = 'main/SEARCH_CHANGE';
export const SEARCH_REQUESTED = 'main/SEARCH_REQUESTED';
export const YOUTUBE_API_KEY = 'AIzaSyA4w7kvBhINrYAmuZbYb6oxC9BknMU393Q';
export const YOUTUBE_VIDEOS_LIMIT = 3;

const initialState = {
  search: {
    text: '',
    videos: [],
    video: null,
    showLoader: false,
  },
}


export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUESTED:
      return {
        ...state,
        search: {
          ...state.search,
          showLoader: true,
        },
      }
    case SEARCH:
      console.log(action.results)
      return {
        ...state,
        search: {
          ...state.search,
          videos: action.results,
          video: action.results[0],
          showLoader: false,
        },
      }
    case SEARCH_CHANGE:
      return {
        ...state,
        search: {
          ...state.search,
          text: action.text,
        },
      }

    default:
      return state
  }
}


export const searchAsync = (text) => {
  return dispatch => {
    dispatch({
      type: SEARCH_REQUESTED,
    });
    const URL_START = 'https://www.googleapis.com/youtube/v3/search?key';
    const finalURL = `${URL_START}=${YOUTUBE_API_KEY}&part=snippet,id&q=${text}&type=video&maxResults=${YOUTUBE_VIDEOS_LIMIT}`;
    if (text) {
      return fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
          const results = responseJson.items.map((obj, index) => (
            {
              id: index,
              src: "https://www.youtube.com/embed/" + obj.id.videoId,
              title: obj.snippet.title,
              publishedAt: obj.snippet.publishedAt,
              description: obj.snippet.description,
              channelTitle: obj.snippet.channelTitle,
              channelId: obj.snippet.channelId,
              img: obj.snippet.thumbnails.default,
            }
          ));
          dispatch({
            type: SEARCH,
            results: results,
          });
        })
        .catch((error) => {
          //@todo implemet some logic here
          //console.error(error);
        });
    }
    dispatch({
      type: SEARCH,
      results: [],
    });
  };
}

export const updateSearchText = (e) => {
  return dispatch => {
    dispatch({
      type: SEARCH_CHANGE,
      text: e.target.value,
    });
  };
}

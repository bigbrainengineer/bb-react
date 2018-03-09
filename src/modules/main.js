import fetch from 'isomorphic-fetch';

export const SEARCH_SUCCESS = 'main/SEARCH_SUCCESS';
export const SEARCH_CHANGE = 'main/SEARCH_CHANGE';
export const SEARCH_REQUESTED = 'main/SEARCH_REQUESTED';
export const LOAD_VIDEO_SUCCESS = 'main/LOAD_VIDEO_SUCCESS';
export const ADD_TO_PLAYLIST_REQUESTED = 'main/ADD_TO_PLAYLIST_REQUESTED';
export const ADD_IN_PLAYLIST_REQUESTED = 'main/ADD_IN_PLAYLIST_REQUESTED';
export const ADD_IN_PLAYLIST_SUCCESS = 'main/ADD_IN_PLAYLIST_SUCCESS';
export const YOUTUBE_API_KEY = 'AIzaSyA4w7kvBhINrYAmuZbYb6oxC9BknMU393Q';
export const YOUTUBE_VIDEOS_LIMIT = 20;

const initialState = {
  search: {
    text: '',
    videos: [],
    video: null,
    showLoader: false,
  },
  playlist: {
    categories: [
      {name: 'rock'},
      {name: 'jazz'},
      {name: 'blues'},
    ],
    showCategories: false,
    added: false,
    currentVideo: null,
    videos: [],
  },
};


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
    case SEARCH_SUCCESS:
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
    case LOAD_VIDEO_SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          video: action.video,
          showLoader: false,
        },
        playlist: {
          ...state.playlist,
          showCategories: false,
        },
      }
    case ADD_TO_PLAYLIST_REQUESTED:
      return {
        ...state,
        playlist: {
          ...state.playlist,
          showCategories: true,
        },
      }
    case ADD_IN_PLAYLIST_REQUESTED:
      return {
        ...state,
        playlist: {
          ...state.playlist,
          added: true,
        },
      }
    case ADD_IN_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlist: {
          ...state.playlist,
          added: false,
          videos: [...state.playlist.videos, action.video],
        },
      }

    default:
      return state;
  }
};

export const addToPlaylist = () => {
  return dispatch => {
    dispatch({
      type: ADD_TO_PLAYLIST_REQUESTED,
    });
  };
}

export const addInPlaylistAsync = (video) => {
  return dispatch => {
    dispatch({
      type: ADD_IN_PLAYLIST_REQUESTED,
    });

    setTimeout(() => {
      dispatch({
        type: ADD_IN_PLAYLIST_SUCCESS,
        video: video,
      });
    }, 1000);
  };
}

export const callYoutubeApi = (text) => {
  const URL_START = 'https://www.googleapis.com/youtube/v3/search?key';
  const finalURL = `${URL_START}=${YOUTUBE_API_KEY}&part=snippet,id&q=${text}&type=video&maxResults=${YOUTUBE_VIDEOS_LIMIT}`;
  return fetch(finalURL);
};

export const getVideos = (responseJson) => {
  return responseJson.items.map(obj => (
    {
      id: obj.id.videoId,
      src: "https://www.youtube.com/embed/" + obj.id.videoId,
      title: obj.snippet.title,
      publishedAt: obj.snippet.publishedAt,
      description: obj.snippet.description,
      channelTitle: obj.snippet.channelTitle,
      channelId: obj.snippet.channelId,
      img: obj.snippet.thumbnails.default,
    }
  ));
};

export const searchAsync = (text) => {
  return dispatch => {
    dispatch({
      type: SEARCH_REQUESTED,
    });
    if (text) {
      callYoutubeApi(text)
        .then((response) => response.json())
        .then((responseJson) => {
          const results = getVideos(responseJson);
          dispatch({
            type: SEARCH_SUCCESS,
            results: results,
          });
        })
        .catch((error) => {
          //@todo implemet some logic here
          //console.error(error);
        });
    }
    dispatch({
      type: SEARCH_SUCCESS,
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

export const loadVideo = (video) => {
  return dispatch => {
    dispatch({
      type: LOAD_VIDEO_SUCCESS,
      video: video,
    });
  };
}

export const searchVideos = (event) => {
  return dispatch => {
    if (event.key === 'Enter') {
      callYoutubeApi(event.target.value)
        .then((response) => response.json())
        .then((responseJson) => {
          const results = getVideos(responseJson);
          dispatch({
            type: SEARCH_SUCCESS,
            results: results,
          });
        })
        .catch((error) => {
          //@todo implemet some logic here
          //console.error(error);
        });
    }
  };
}

import fetch from 'isomorphic-fetch';

const initialState = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('id_token'),
  user: {},
};

export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT_REQUEST,
  });
  localStorage.removeItem('id_token');
  localStorage.removeItem('access_token');
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

export const loginUser = credentials => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
    credentials,
  });
  const { username, password } = credentials;
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${username}&password=${password}`,
  };
  return setTimeout(() => {
    const user = {
      username: 'shathzoor',
      first_name: 'Shat',
      last_name: 'Hzoor',
      id_token: 'Id Token',
      access_token: 'Access Token',
    };
    localStorage.setItem('id_token', user.id_token);
    localStorage.setItem('id_token', user.access_token);
    dispatch({
      action: LOGIN_SUCCESS,
      user,
    });
  }, 1000);
  // return fetch('http://localhost:3001/sessions/create', config)
  //   .then(response =>
  //     response.json().then(user => ({ user, response }))).then(({ user, response }) => {
  //     if (!response.ok) {
  //       dispatch({
  //         type: LOGIN_FAILURE,
  //         message: user.message,
  //       });
  //       return Promise.reject(user);
  //     }
  //     localStorage.setItem('id_token', user.id_token);
  //     localStorage.setItem('id_token', user.access_token);
  //     dispatch({
  //       action: LOGIN_SUCCESS,
  //       user,
  //     });
  //     return true;
  //   }).catch(err => console.log('Error: ', err));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.credentials,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
        errorMessage: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};

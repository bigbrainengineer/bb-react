export const TOGGLE_FORGOT_PAGE = 'login/TOGGLE_FORGOT_PAGE';
export const FILL_INPUT_REQUESTED = 'login/FILL_INPUT_REQUESTED';
export const FILL_PASSWORD_REQUESTED = 'login/FILL_PASSWORD_REQUESTED';
export const LOGIN_FORM_SUBMITTED = 'login/LOGIN_FORM_SUBMITTED';

const initialState = {
  isLoginPage: true,
  email: '',
  password: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FORGOT_PAGE:
      return {
        ...state,
        isLoginPage: !state.isLoginPage,
      };
    case FILL_INPUT_REQUESTED:
      return {
        ...state,
        email: action.text,
      };
    case FILL_PASSWORD_REQUESTED:
      return {
        ...state,
        password: action.text,
      };
    case LOGIN_FORM_SUBMITTED:
      return {
        ...state,
      }

    default:
      return state;
  }
};

export const toggleLoginForgotPage = () => (dispatch) => {
  dispatch({
    type: TOGGLE_FORGOT_PAGE,
  });
};

export const fillEmailText = (e) => {
  return dispatch => {
    dispatch({
      type: FILL_INPUT_REQUESTED,
      text: e.target.value,
    });
  };
};

export const fillPasswordText = (e) => {
  return dispatch => {
    dispatch({
      type: FILL_PASSWORD_REQUESTED,
      text: e.target.value,
    });
  };
};

export const postLoginFormData = (email, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN_FORM_SUBMITTED,
    });
  };
}

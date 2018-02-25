export const IS_LOGIN_PAGE_REQUESTED = 'login/IS_LOGIN_PAGE_REQUESTED';
export const IS_LOGIN_PAGE = 'login/IS_LOGIN_PAGE';
export const IS_FORGOT_PAGE_REQUESTED = 'login/IS_FORGOT_PAGE_REQUESTED';
export const IS_FORGOT_PAGE = 'login/IS_FORGOT_PAGE';

const initialState = {
  IS_LOGIN_PAGE: true,
  IS_FORGOT_PAGE: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGIN_PAGE:
      return {
        ...state,
        IS_LOGIN_PAGE: true,
      };

    case IS_FORGOT_PAGE:
      return {
        ...state,
        IS_FORGOT_PAGE: true,
      };

    default:
      return state
  }
}

export const isLoginPage = () => {
  return dispatch => {
    dispatch({
      type: IS_LOGIN_PAGE_REQUESTED
    })

    dispatch({
      type: IS_LOGIN_PAGE
    })
  }
}

export const isForgotPage = () => {
  return dispatch => {
    dispatch({
      type: IS_FORGOT_PAGE_REQUESTED
    })

    dispatch({
      type: IS_FORGOT_PAGE
    })
  }
}



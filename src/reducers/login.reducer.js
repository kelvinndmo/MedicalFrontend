import { LOGIN_ACTION } from "../actions/types";

const initialState = {
  loggedIn: false,
  user: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        errors: ""
      };
    default:
      return state;
  }
};

export default loginReducer;

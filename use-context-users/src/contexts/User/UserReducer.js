import { get_users, get_profile } from "../types";

const Reducer = (state, action) => { 
  const { payload, type } = action;

  switch (type) {
    case get_users:
      return {
        ...state,
        users: payload,
      };
    case get_profile:
      return {
        ...state,
        selectedUser: payload,
      };
    default:
      return state;
  }
};

export default Reducer;
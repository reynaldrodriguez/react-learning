import React, { useReducer, useCallback } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axios from "axios";

const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  // const [state, setstate] = useState(initialState) // one way response
  const [state, dispatch] = useReducer(UserReducer, initialState); // multiple way response

  const getUsers = useCallback(async () => {
    const res = await axios.get("https://reqres.in/api/users")
    dispatch({
      type: "[GET] USERS",
      payload: res.data.data,
    });
  }, []);

  const getProfile = async (id) => {
    const res = await axios.get("https://reqres.in/api/users/" + id)
    dispatch({
      type: "[GET] PROFILE",
      payload: res.data.data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;

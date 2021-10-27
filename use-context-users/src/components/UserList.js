import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../contexts/User/UserContext";

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {users.map( ({id, avatar, first_name, last_name}) => (
        <a
          className="list-group-item list-group-item-action"
          href="#!"
          key={id}
          onClick={ () => getProfile(id)}
        >
            <img src={avatar} alt="" className="img-fluid mr-4 rounded-circle" width="70" />
            <p>{`${first_name} ${last_name}`}</p>
        </a>
      ))}
    </div>
  );
};

export default UserList;

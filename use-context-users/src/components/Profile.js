import React, { useContext } from "react";
import UserContext from "../contexts/User/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img
            src={selectedUser.avatar}
            className="card-img-top rounded-circle m-auto img-fluid"
            alt=""
            style={{ width: 180 }}
          />
          <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
          <h3>{`${selectedUser.email}`}</h3>
        </div>
      ) : (
        <h1>No user selected</h1>
      )}
    </>
  );
};

export default Profile;

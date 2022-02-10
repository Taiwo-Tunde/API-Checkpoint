import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "gray",
        padding: "10rem",
      }}
    >
      {userData.map((userData) => (
        <li key={userData.id}>
          <div>
            <p> Name: {userData.name}</p>
            <p> phone: {userData.phone}</p>
            <p>E-mail: {userData.email}</p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default UserList;

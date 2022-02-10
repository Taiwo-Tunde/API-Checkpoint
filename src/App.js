import React from "react";
import "./App.css";
import UserList from "./component/UserList";

function App() {
  return (
    <div className="App">
      {" "}
      <h1>List of Users from API</h1>
      <UserList />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import AppBody from "./components/AppBody";

function App() {
  const [userState, setUserState] = useState({ isLoggedIn: false });
  const [message, setMessage] = useState("");
  /*  const logout = () => {
    
    logoutFetch(userState.username)
      .then((message) => {
        setUserState({ isLoggedIn: false });
        setMessage(message);
      })
      .catch((error) => setMessage(error.message));
  }; */
  return (
    <div className="app" onChange={() => setMessage("")}>
      <h1>GROCERIES STOCK MONITOR APP</h1>
      <p className="current-user-display hidden">
        <span>{`Logged In as: `}</span>
        <span>username</span>
      </p>
      <p className="message">{message}</p>
      <AppBody setMessage={setMessage} />
    </div>
  );
}

export default App;

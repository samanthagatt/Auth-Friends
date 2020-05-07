import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { setAuthToken } from "../utils/cookiesUtil";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const login = e => {
    e.preventDefault();
    axiosWithAuth
      .post("/api/login", credentials)
      .then(res => {
        setAuthToken(res.data.payload);
        window.location.href = "/";
      })
      .catch(err => console.log(err));
  };
  const updateCreds = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };
  return (
    <div className="content">
      <label htmlFor="username">Username: </label>
      <input type="text" 
        id="username" 
        name="username"
        value={credentials.username}
        onChange={updateCreds} />
      <br/>
      <label htmlFor="password">Password: </label>
      <input type="password"
        id="password"
        name="password"
        value={credentials.password}
        onChange={updateCreds} />
      <br/>
      <button onClick={login}>Login</button>
    </div>
  )
};
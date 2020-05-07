import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

export const AddFriend = () => {
  const history = useHistory();
  const [friend, setFriend] = useState({
    id: "",
    name: "",
    age: "",
    email: ""
  });
  const handleInputChange = e => {
    e.preventDefault();
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    })
  };
  const handleSubmit = e => {
    e.preventDefault();
    const friendToSubmit = { ...friend };
    friendToSubmit.age = parseInt(friendToSubmit.age);
    axiosWithAuth
      .post(`/api/friends/`, friendToSubmit)
      .then(() => history.push("/friends"))
      .catch(err => console.log(err));
  };
  return (
    <div className="content">
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" 
        value={friend.name} onChange={handleInputChange} />
      <br/>
      <label htmlFor="age">Age: </label>
      <input type="number" id="age" name="age" 
        value={friend.age} onChange={handleInputChange} />
      <br/>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" name="email" 
        value={friend.email} onChange={handleInputChange} />
      <br/>
      <button onClick={handleSubmit}>Add Friend</button>
    </div>
  )
};
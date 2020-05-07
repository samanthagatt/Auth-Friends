import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";

export const Friend = () => {
  const { friendId } = useParams();
  const history = useHistory();
  const [notFound, setNotFound] = useState(false);
  const [friend, setFriend] = useState({
    id: "",
    name: "",
    age: "",
    email: ""
  });
  useEffect(() => {
    axiosWithAuth
      .get(`/api/friends/${friendId}`)
      .then(res => setFriend(res.data))
      .catch(err => err.response.status === 404 && setNotFound(true));
  }, []);
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
      .put(`/api/friends/${friendId}`, friendToSubmit)
      .then(() => history.push("/friends"))
      .catch(err => console.log(err));
  };
  const handleDelete = e => {
    e.preventDefault();
    axiosWithAuth
      .delete(`/api/friends/${friendId}`)
      .then(() => history.push("/friends"))
      .catch(err => console.log(err));
  };
  return (
    <div className="content">
      { notFound ?
      <p>I'm sorry this friend is not in our database!</p> :
      <>
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
        <button onClick={handleSubmit}>Edit Friend</button>
        <button onClick={handleDelete}>Delete Friend</button>
      </>
      }
    </div>
  )
};
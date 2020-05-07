import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

export const AllFriends = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axiosWithAuth
      .get("/api/friends")
      .then(res => {
        setFriends(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="content flex-list">
      { isLoading && <p>Loading... </p> }
      {friends.map(friend => (
        <Link to={`friend/${friend.id}`} className="flex-item" key={friend.id}>
          <h2>{friend.name} - {friend.age}</h2>
          <p>{friend.email}</p>
        </Link>
      ))}
      <Link to="/friends/add" className="flex-item">+</Link>
    </div>
  )
};
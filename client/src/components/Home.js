import React from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  return (
    <div className="content">
      <button onClick={() => history.push("/friends")}>
        Show all friends
      </button>
    </div>
  )
};
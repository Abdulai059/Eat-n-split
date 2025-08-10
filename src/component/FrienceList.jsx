import React from "react";

import Friend from "./Friend";

function FrienceList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} /> 
      ))}
    </ul>
  );
}

export default FrienceList;

import React, { useState } from "react";
import FrienceList from "./component/FrienceList";
import FormAddFriends from "./component/FormAddFriends";
import Button from "./component/Button";
import FormSplitBill from "./component/FormSplitBill";
import initialFriends from "./component/data/data";

export function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriends() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(newFriend) {
    setFriends([...friends, newFriend]);
    setShowAddFriend (false)
  }
  

  return (
    <div className="app">
      <div className="sidebar">
        <FrienceList friends={friends} />
        {showAddFriend && <FormAddFriends onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriends}>
          {showAddFriend ? "CLose" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;

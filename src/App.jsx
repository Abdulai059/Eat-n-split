import React, { useState } from "react";
import FrienceList from "./component/FrienceList";
import FormAddFriends from "./component/FormAddFriends";
import Button from "./component/Button";
import FormSplitBill from "./component/FormSplitBill";
import initialFriends from "./component/data/data";

export function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriends() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(newFriend) {
    setFriends([...friends, newFriend]);
    setShowAddFriend(false);
    // setSelectedFriend(false)
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false); 
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FrienceList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriends onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriends}>
          {showAddFriend ? "CLose" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;

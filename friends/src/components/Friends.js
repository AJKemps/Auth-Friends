import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { motion } from "framer-motion";

const friends = [];
const friendData = {
  name: "",
  age: "",
  email: "",
};

const Friends = () => {
  const [friendsList, setFriendsList] = useState(friends);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [addFriend, setAddFriend] = useState(false);
  const [addFriendData, setAddFriendData] = useState(friendData);

  useEffect(() => {
    axiosWithAuth()
      .get("friends")
      .then((res) => {
        console.log("FRIENDS DATA:", res);
        setFriendsList(res.data);
        setLoading(false);
      })
      .catch((err) => console.log("FRIENDS ERROR:", err));
  }, []);

  const toggleAddFriend = () => {
    setAddFriend(!addFriend);
  };

  const handleChanges = (event) => {
    setAddFriendData({
      ...addFriendData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddFriend = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("friends", addFriendData)
      .then((res) => {
        console.log("ADD FRIEND RESPONSE", res);
        setFriendsList(res.data);
        setAddFriend(!addFriend);
      })
      .catch((err) => console.log("ADD FRIEND ERR:", err));
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  if (addFriend === true) {
    return (
      <motion.div
        className="bodyContainer"
        initial={{
          opacity: 1,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <form onSubmit={handleAddFriend}>
          <div className="inputGroup">
            <label>name</label>
            <input type="text" onChange={handleChanges} name="name"></input>
          </div>
          <div className="inputGroup">
            <label>age</label>
            <input type="text" onChange={handleChanges} name="age"></input>
          </div>
          <div className="inputGroup">
            <label>email</label>
            <input type="email" onChange={handleChanges} name="email"></input>
          </div>

          <button type="submit">Add Friend</button>
          <h3 onClick={toggleAddFriend}>Back to Friends</h3>
        </form>
      </motion.div>
    );
  } else if (loading === true) {
    return (
      <div className="bodyContainer">
        <h1>Loading Friends...</h1>
      </div>
    );
  } else {
    return (
      <div
        className="bodyContainer"
        initial={{
          opacity: 1,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div>
          <h2>Friends</h2>
          {friendsList.map((friend, index) => (
            <motion.div
              key={friend.id}
              className="friendCard"
              initial={{
                opacity: 1,
                y: 150,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1 + index / 5,
              }}
            >
              <h3>{friend.name}</h3>

              <div>
                {showMore ? (
                  <div>
                    <p>{friend.age} years old</p>
                    <p>{friend.email}</p>
                    <p onClick={toggleShowMore}>Show Less</p>
                  </div>
                ) : (
                  <p onClick={toggleShowMore}>Show More</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div>
          <h3 onClick={toggleAddFriend}>Add Friend</h3>
        </div>
      </div>
    );
  }
};

export default Friends;

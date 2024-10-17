import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/friends')
      .then(response => setFriends(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Friends List</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend._id} className="p-2 border-b">
            {friend.name} - {friend.email} - {friend.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;

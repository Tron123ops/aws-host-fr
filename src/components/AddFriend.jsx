import React, { useState } from 'react';
import axios from 'axios';

const AddFriend = () => {
  const [friend, setFriend] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/friends', friend)
      .then(response => {
        alert('Friend added successfully');
        setFriend({ name: '', email: '', phone: '' });
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add a Friend</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={friend.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border"
        />
        <input
          type="email"
          name="email"
          value={friend.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border"
        />
        <input
          type="text"
          name="phone"
          value={friend.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full p-2 border"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Friend
        </button>
      </form>
    </div>
  );
};

export default AddFriend;

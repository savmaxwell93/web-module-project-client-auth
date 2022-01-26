import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:9000/api/friends', {
      headers: {
        authorization: token
      }
    })
    .then(resp => {
      setFriends(resp.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

    return (
      <div>
        <h1>FRIENDS LIST</h1>
        <div>
          <ul>
            {
              friends.map(friend => {
                return <li key={friend.name}>{friend.name} {friend.age} {friend.email}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
}

export default FriendsList;
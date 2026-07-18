// import { useEffect, useState } from 'react'
// import './Friends.css'
// export default function Friends(){\

//     const [friends, setFriends] = useState([])

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => console.log(data))

//     },[])

//     return(
//         <div classNme='box'>
//             <h3>Friends: {friends.length}</h3>
//         </div>
//     )
// }

import { useEffect, useState } from "react";
import "./Friends.css";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="box">
      <h3>Friends: {friends.length}</h3>

      {friends.map((friend) => (
        <p key={friend.id}>{friend.name}</p>
      ))}
    </div>
  );
}
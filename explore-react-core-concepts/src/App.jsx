// import { useEffect, useState } from "react";
// import "./Friends.css";

// export default function Friends() {
//   const [friends, setFriends] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setFriends(data));
//   }, []);

//   return (
//     <div className="box">
//       <h3>Friends: {friends.length}</h3>

//       {friends.map((friend) => (
//         <p key={friend.id}>{friend.name}</p>
//       ))}
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import "./Friends.css";

// export default function Friends() {
//   const [friends, setFriends] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setFriends(data));
//   }, []);

//   return (
//     <div className="box">
//       <h3>Friends: {friends.length}</h3>

//       {friends.map((friend) => (
//         <p key={friend.id}>{friend.name}</p>
//       ))}
//     </div>
//   );
// }



import { useState } from "react";
import "./App.css";

import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import Friends from "./Friends";

function App() {
  const actors = [
    "sajib",
    "avijeet roy",
    "shuvo",
    "dipto",
  ];

  const singers = [
    { id: 1, name: "Dr. Mahfuzur Rahman", age: 60 },
    { id: 2, name: "Eva Rahaman", age: 38 },
    { id: 3, name: "Shuvro Dev", age: 60 },
    { id: 4, name: "Pritom Vai", age: 26 },
  ];

  return (
    <>
      <h2>Vite + React</h2>

      <Friends />

      {singers.map((singer) => (
        <Singer key={singer.id} singer={singer} />
      ))}

      <Actor name="Utshab Kumar" />

      {actors.map((actor) => (
        <Actor key={actor} name={actor} />
      ))}

      <Todo task="Learn React" isDone={true} />
      <Todo task="Explore Core Concepts" isDone={false} />
      <Todo task="Try JSX" isDone={true} />

      <Device name="Laptop" price="5500" />
      <Device name="Mobile" price="2000" />
      <Device name="Watch" price="1500" />

      <Person />

      <Student grade="7" score="99" />
      <Student grade={12} score={85} />
      <Student />

      <Developer />
    </>
  );
}

function Device({ name, price }) {
  return (
    <h2>
      This Device: {name} Price: {price}
    </h2>
  );
}

function Student({ grade = 1, score = 0 }) {
  return (
    <div className="student">
      <h3>This is a Student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = {
    name: "Sakib",
  };

  return (
    <h3>
      I am {person.name} with age: {age + money}
    </h3>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };

  return (
    <div style={developerStyle}>
      <h3>Developer</h3>
      <p>Coding...</p>
    </div>
  );
}

export default App;
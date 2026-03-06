import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
 
  return (
    <>
     <h3>Vite + React</h3>

     {/* atar output ar jonno amra todo.js ar moddo pabo */}

     {/* <Todo
      task="Learn Rreact" 
      isDone={true}></Todo>
      <Todo
      task="Explore Core Concepts"
       isDone={false}></Todo>
      <Todo
       task="Try JSX" 
       isDone={true}></Todo> */}



{/* // agula display ta dakta gala neshar function gula folow korbo */}

     {/* <Device name="Laptop" price="5500"></Device>
     <Device name="Mobaile" price="2000"></Device>
     <Device name="Watch" price="1500"></Device>
     <Person></Person>
     <Student grade="7" score="99"></Student>
     <Student grade={12} score="85"></Student>
     <Student></Student>
     <Devoloper></Devoloper> */}
    </>
  )
}

function Device(props){
  // properti ka short kora props bola hocca
  console.log(props)
  return <h2>This Device:{props.name} price: {props.price}</h2>
}


const {grade, score} = {grade: '7', score: '99'};

function Student({grade=1, score=0}){
  console.log(grade, score)
  return ( 
   <div className='student'>
    <h3>This is a student</h3>
    <p>Name: {grade}</p>
    <p>score: {score}</p>
    <p>age:</p>
  </div>
  )
}


function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 12}
  return <h3>I am a {person.name} with age: {age + money}</h3>
}

// function Student(){
//   return ( 
//    <div className='student'>
//     <h3>This is a student</h3>
//     <p>Name:</p>
//     <p>age:</p>
//   </div>
//   )
// }

function Devoloper(){
  const devoloperstyle = {
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadious: '20px'
  }
  return (
    <div style={devoloperstyle}>
      <h5>dev devo</h5>
      <p>Coding</p>
    </div>
  )
}
export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <>
     <h1>Vite + React</h1>
     <Device name="Laptop" price="5500"></Device>
     <Device name="Mobaile" price="2000"></Device>
     <Device name="Watch" price="1500"></Device>
     <Person></Person>
     {/* <Student grade="7" score="99"></Student> */}
     <Student></Student>
     <Devoloper></Devoloper>
    </>
  )
}

function Device(props){
  // properti ka short kora props bola hocca
  console.log(props)
  return <h2>This Device:{props.name} price: {props.price}</h2>
}


function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 12}
  return <h3>I am a {person.name} with age: {age + money}</h3>
}

function Student(){
  return ( 
   <div className='student'>
    <h3>This is a student</h3>
    <p>Name:</p>
    <p>age:</p>
  </div>
  )
}

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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './singer'

function App() {

  // actors data
  const actors = [
    'sajib',
    'avijeet roy',
    'shuvo',
    'dipto'
  ];

  // singers data
  const singers = [
    {id: 1, name: 'Dr. Mahfuzur Rahman', age: 60 },
    {id:2, name: 'Eva Rahaman', age: 38 },
    { id:3, name: 'Shuvro Dev', age: 60 },
    {id:4, name: 'Pritom Vai', age: 26},
  ];

  return (
    <>
      <h2>Vite + React</h2>


{/* singer.jsx--------------------------------------- */}
      {
  singers.map(singer =>
    <Singer key={singer.id} singer={singer}></Singer>
  )
}

 



      {/* actors.jsx----------------------------- */}
     <Actor name={"Utshab Kumar"}></Actor>
      {
        actors.map(actor =>
          <Actor key={actor} name={actor}></Actor>
        )
      }



     {/* atar output ar jonno amra todo.js ar moddo pabo */}

<Todo 
  task="Learn React" 
  isDone={true}>
</Todo>

<Todo 
  task="Explore Core Concepts" 
  isDone={false}>
</Todo>

<Todo 
  task="Try JSX" 
  isDone={true}>
</Todo>




{/* agula display ta dakta gala neshar function gula follow korbo */}

<Device name="Laptop" price="5500"></Device>
<Device name="Mobile" price="2000"></Device>
<Device name="Watch" price="1500"></Device>

<Person></Person>

<Student grade="7" score="99"></Student>
<Student grade={12} score="85"></Student>
<Student></Student>

<Devoloper></Devoloper>

    </>
  )
}



//---------------------------------------------------------

function Device(props){
  console.log(props)
  return <h2>This Device: {props.name} price: {props.price}</h2>
}


// Student Component

function Student({grade=1, score=0}){
  console.log(grade, score)

  return ( 
    <div className='student'>
      <h3>This is a student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
      <p>Age:</p>
    </div>
  )
}



// Person Component

function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 12}

  return <h3>I am {person.name} with age: {age + money}</h3>
}



// Developer Component

function Devoloper(){

  const devoloperstyle = {
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'20px'
  }

  return (
    <div style={devoloperstyle}>
      <h5>Dev Devo</h5>
      <p>Coding</p>
    </div>
  )
}


export default App
 //
//  export default function Todo({task}){
//     return (
//         <li>Task:{task}</li>
//     )
// }




 // conditionall rendering option ------------------1

// conditionall redering option --1
//  export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>work on: {task}</li>
//     }
// }




  // conditionall rendering option ------------------2

//  export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return (
//         <li>Work on: {}task</li>
//     )  
// }





 // conditionall rendering option ------------------3
 //ternary opearator javascript a 1 line a if else lekta pariii----

//  export default function Todo({task, isDone}){
//     return (
//         <li> {isDone ? 'Finished': 'work on'} : {task}</li>
//     )
// }



//conditional redering option 4: &&--------------------

export default function Todo({task, isDone}){
    return(
        <li>{task}  {isDone && ': Done'}</li>
    )
}
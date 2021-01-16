import React,{useEffect} from 'react'
import Classes from './TodoList.module.css'
import Axios from '../Axios/Axios'
let TodoList=(props) => {
  const[Data,setWorkData]=React.useState('')

const[TodoData,setTodoData]=React.useState('')

  useEffect(() => {
  Axios.get('https://todolist-9ae78-default-rtdb.firebaseio.com/.json').then((response) => {
    setWorkData(Object.values(response.data.WorkList))
    setTodoData(Object.values(response.data.TodoList))

    console.log(response);

  })
  },[])
let counter=0
let q=Object.values(Data)
let v=Object.values(TodoData)
let r=q.map((vr) => {
  counter=counter+1
return(
  <div class={Classes.mm}>
  <p>Work-To Do List {counter}</p>
  {vr.map((aa) => {
    return(
      <p>{aa}</p>

    )
  })}
  </div>
)
})
let counterone=0
let a=v.map((vr) => {
  counterone=counterone+1

return(
  <div class={Classes.nn}>
  <p>Personal-To Do List {counterone} </p> 
  {vr.map((aa) => {
    return(
      <p>{aa}</p>

    )
  })}
  </div>
)
})

  return(
    <div>
    <div>
    <h1>Personal TODO-LIST</h1>
     <h2>{a}</h2>

     <br></br>


    </div>
    <h1>Work TODO-LIST</h1>
    <div>
    <h2>{r}</h2>

     <br></br>


    </div>


    </div>
  )
}
export default TodoList

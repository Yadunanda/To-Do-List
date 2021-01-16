import React,{useState,usePrevious,useEffect} from 'react'
import Classes from './Todo.module.css'
import { Button, InputLabel,  } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DatePickers from '../Date/Date'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from '../Home/Home'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import ListItem from '../ListItem/ListItem'
import Thankyou from '../Thankyou/Thankyou'
import Axios from '../Axios/Axios'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

 let Todo=(props) => {
   const[TodoList,setTodoList]=useState([])
   const [selectedDate, setSelectedDate] = React.useState();
 //console.log(selectedDate);
 const [value, setValue] = React.useState('');
//console.log(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

let handleDateChange = (date) => {
     setSelectedDate(date);
   };



   let Delete=(event) => {
     let u=[...TodoList]
   let x= event.currentTarget.id
   let z=u.splice(x,1)


   console.log(u);
   setTodoList(u)
   }


   // we are initializing the Todolist as an array //settodo list is a function which changes todolist variable array
 let Display=TodoList.map((everyelement) => {

  return(
    <div   className={Classes.h}>
  <h3></h3>
  <h3 >{everyelement}</h3>
      </div>
 )
 })//we  can simply create a variable and ask it to store the the returned values of the mapped method and Display it with the jsx with{}
 let t=Display.map((x) => {
   return(
     <div id={Display.indexOf(x)} className={Classes.j}>
       {console.log(Display.indexOf(x))}
       {x}
       <Button  id={Display.indexOf(x)}  onClick={Delete} variant="outlined" color="secondary" >Clear</Button>

     </div>

   )
 })

console.log(Display);

 let push=() => {
 let xy=document.getElementById("one").value
 let xyz="✅Your To Do :"+document.getElementById("one").value+".➖     "
 let abcd=" 📆Date:"+document.getElementById("date-picker-inline").value+"    "
 let pqrs=" 🕒time: "+document.getElementById("time-picker").value+"     "
 let wasd=" 🔆Importance Level:" +value+""
 let newstate=[]
 if(xy.length==0){
   return ;
 }
 else{
 newstate=[...TodoList, xyz+abcd+pqrs+wasd]
  setTodoList(newstate)
 }

 console.log(newstate);

 }
 let remove=() => {
   let xyz=document.getElementById("one").value= ''

 }
 let Pop=() => {
  TodoList.pop()
  console.log(TodoList);
  let newstatet=[...TodoList]
  setTodoList(newstatet)

 }
 let SubmitHandler=() => {
   let ab=document.getElementById("one").value

    const Todolistone={
      TodoList:TodoList
    }
    Axios.post('/TodoList.json',TodoList)
 }


   return (

     <div>

    <h1>Personal</h1>
      <br></br>
       <TextField
                 label="Enter your To Do"
                 id="outlined-size-normal"
                 defaultValue=""
                 variant="outlined"
                 id='one'
               />
  <br></br>
    <br></br>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',


            }}
          />

          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>

      <br></br>
        <FormControl comptwont="fieldset">
              <FormLabel comptwont="legend">Level of Importance</FormLabel>
              <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange} >
                <FormControlLabel id='a' value="High " control={<Radio />} label="High Importance" />
                <FormControlLabel id='b' value="Medium " control={<Radio />} label="Medium Importance" />
                <FormControlLabel id='c' value="Low " control={<Radio />} label="Low Importance" />
              </RadioGroup>
            </FormControl>
             <br></br>
  <br></br>

     <Button onClick={push} className={Classes.o} variant="outlined" color="primary">  Write your To DO  </Button>
     <Button onClick={Pop}  variant="outlined" color="primary">  Remove your To DO </Button>




      <Button onClick={remove} className={Classes.o} variant="outlined" color="secondary" >Clear</Button>


    <ListItem>
  {t}
  <br></br>
     </ListItem>
     <br></br>
     <Button onClick={SubmitHandler} variant="contained" color="secondary"><Link className={Classes.two} to="/Thankyou">Submit your List</Link></Button>
     </div>
   );
 }



export default Todo

import React,{useState,usePrevious} from 'react'
import Classes from './Work.module.css'
import { Button, InputLabel,  } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DatePickers from '../Date/Date'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from '../Home/Home'
import WorkThankyou from '../WorkThankyou/WorkThankyou'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Axios from '../Axios/Axios'
import ListItem from '../ListItem/ListItem'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

 let Work=(props) => {
   const[WorkList,setWorkList]=useState([])
   const [selectedDate, setSelectedDate] = React.useState();
 console.log(typeof(String(selectedDate)));


 const [value, setValue] = React.useState('');
 console.log(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
 let handleDateChange = (date) => {
      setSelectedDate(date);
    };

   // we are initializing the Worklist as an array //setWork list is a function which changes Worklist variable array
   let Delete=(event) => {
     let u=[...WorkList]
   let x= event.currentTarget.id
   let z=u.splice(x,1)


   console.log(u);
   setWorkList(u)
   }

 let workdisplay=WorkList.map((everyelement) => {

  return(
    <div className={Classes.h} >
  <h4>{everyelement}</h4>

      </div>
 )
 })//we  can simply create a variable and ask it to store the the returned values of the mapped method and display it with the jsx with{}
 let t=workdisplay.map((x) => {
   return(
     <div id={workdisplay.indexOf(x)} className={Classes.j}>
       {console.log(workdisplay.indexOf(x))}
       {x}
       <Button  id={workdisplay.indexOf(x)}  onClick={Delete} variant="outlined" color="secondary" >Clear</Button>

     </div>

   )
 })

 let push=() => {
 let xy=document.getElementById("two").value
 let xyz="✅Your Todo :"+document.getElementById("two").value+".➖     "
 let abcd=" 📆Date:"+document.getElementById("date-picker-inline").value+"    "
 let pqrs=" 🕒time: "+document.getElementById("time-picker").value+"     "
 let wasd=" 🔆Importance Level:" +value
 let newstate=[]
 if(xy.length==0){
   return ;
 }
 else{
 newstate=[...WorkList, xyz+abcd+pqrs+wasd]
  setWorkList(newstate)
 }

 console.log(newstate);

 }
 let remove=() => {
   let xyz=document.getElementById("two").value= ''

 }
 let Pop=() => {
   let abc=WorkList.pop()
  console.log(WorkList);
  let newstatet=[...WorkList]
  setWorkList(newstatet)

 }
 let SubmitHandler=() => {
   const Worklistone={
     WorkList:WorkList
   }
   Axios.post('/WorkList.json',WorkList)
 }



   return (

     <div>

       <h1>Work</h1>

       <TextField
                 label="Enter your To Do"
                 id="outlined-size-normal"
                 defaultValue=""
                 variant="outlined"
                 id='two'
               />
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
                         <FormControlLabel value="High " control={<Radio />} label="High Importance" />
                         <FormControlLabel value="Medium " control={<Radio />} label="Medium Importance" />
                         <FormControlLabel value="Low " control={<Radio />} label="Low Importance" />
                       </RadioGroup>
                     </FormControl>
 <br></br>
     <Button onClick={push} variant="outlined" color="primary">  Write your To Do  </Button>
     <Button onClick={Pop} variant="outlined" color="primary">  Remove your To Do </Button>


      <Button onClick={remove} variant="outlined" color="secondary" >Clear</Button>



     <ListItem>
  {t}
  <br></br>

</ListItem>
     <br></br>
     <br></br>
       <Button onClick={SubmitHandler} variant="contained" color="secondary"><Link className={Classes.two} to="/WorkThankyou">Submit your List</Link></Button>
     </div>
   );
 }



export default Work

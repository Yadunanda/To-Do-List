import React from 'react'
import Classes from './Thankyou.module.css'
import { Button, InputLabel,  } from '@material-ui/core';
import TodoList from '../TodoList/TodoList'
import{ Route,Link} from 'react-router-dom'
import Todo from'../Todo/Todo'

let Thankyou=(props) => {
  return(
<div className={Classes.one}>
<h1 >Thankyou for using this application</h1>
<h3>Please view your Todo-List in the  'YOUR TODO-LIST' section or by clicking the "Your List" button below or if you want to write a new personal Todo click on the "RETURN" button </h3>
  <Button className={Classes.button} variant="contained" color="secondary"><Link className={Classes.two} to='/Todo'>Return </Link></Button>
    <Button className={Classes.button} variant="contained" color="primary"><Link className={Classes.two} to='/TodoList'>Your List</Link></Button>

</div>
  )
}
export default Thankyou

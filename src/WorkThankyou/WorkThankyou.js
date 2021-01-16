import React from 'react'
import Classes from './WorkThankyou.module.css'
import { Button, InputLabel,  } from '@material-ui/core';
import TodoList from '../TodoList/TodoList'
import{ Route,Link} from 'react-router-dom'
import Work from'../Work/Work'

let WorkThankyou=(props) => {
  return(
<div className={Classes.one}>
<h1 >Thankyou for using this application</h1>
<h3>Please view your Todo-List in the  'YOUR TODO-LIST' section or by clicking the "YOUR LIST" button below or if you want to write a new work related Todo, click on the "RETURN" button </h3>
  <Button className={Classes.button} variant="contained" color="secondary"><Link className={Classes.two} to='/Work'>Return </Link></Button>
    <Button className={Classes.button} variant="contained" color="primary"><Link className={Classes.two} to='/TodoList'>Your List</Link></Button>

</div>
  )
}
export default WorkThankyou

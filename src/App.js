import React,{useState} from 'react'
import './App.css';
import { Button, InputLabel,ButtonGroup } from '@material-ui/core';
import Todo from './Todo/Todo'
import Work from './Work/Work'
import {BrowserRouter, Route, Link,Switch} from 'react-router-dom'
import Home from './Home/Home'
import TodoList from './TodoList/TodoList'
import Thankyou from './Thankyou/Thankyou'
import WorkThankyou from './WorkThankyou/WorkThankyou'


function App() {
  //Now we are going to set up the reactHooks for Yadunanda's todo List


return(
  <BrowserRouter className="App">

  <div className="App">
  <h1>Yadunanda's To Do App</h1>
    <ButtonGroup variant="contained" color="primary" aria-label="text primary button group">
          <Button><Link className="Link" to="/">Home</Link></Button>
  <Button > <Link className="Link" to="/Todo">Personal To Do-List</Link></Button>
  <Button><Link className="Link" to="/Work">Work To Do-list</Link></Button>
    <Button><Link className="Link" to="/TodoList">Your To Do-list</Link></Button>

</ButtonGroup>

<br></br>
<br></br>
<Route path='/' exact component={Home}/>
<Switch>
<Route path='/Todo'component={Todo}/>
  <Route path='/Work'component={Work}/>
    <Route path='/Thankyou'exact component={Thankyou}/>
      <Route path='/WorkThankyou'exact component={WorkThankyou}/>


    <Route path='/TodoList'component={TodoList}/>



  </Switch>






  </div>
  </BrowserRouter>
)
}
export default App;

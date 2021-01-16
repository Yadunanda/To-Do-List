import React from 'react'
import Classes from './Home.module.css'


let Home=(props) => {
return(
  <div className={Classes.div}>
<h1>Hi All, Welcome to this Newage todo-List Application. </h1>
<h5>By Yadunanda Mukundhan(Uottawa)</h5>
<h2>Create Your Todo in 3 Easy steps</h2>
<h3 className={Classes.one}>1.Select what kind of ToDo list you want to write</h3>
<h3 className={Classes.two}>2.Write todos with your preferred  Date, Time and the Level of Importance  </h3>
<h3 className={Classes.three}>3.Submit Your Todos and view it in the 'YOUR TODO-List' section</h3>
  </div>
)
}

export default Home

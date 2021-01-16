import React from "react"
import Classes from './List.module.css'
let List=(props) => {
  return(
    <div className={Classes.div}>
{props.children}
    </div>
  )
}
export default List

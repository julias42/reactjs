import { useState } from "react";
import styles  from './Message.module.css'

export function Message(props){
  return(
    <h1 className={styles.title}>{props.title}</h1> 
    
  )
}
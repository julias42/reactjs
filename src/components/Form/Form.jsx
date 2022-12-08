import { useState, useEffect} from "react";
import styles from './Form.module.css'
import {Button} from '../UI/Button'
import { AUTHOR } from "../../constants";

export function Form({addMessage}){
  const [text, setText] = useState('')
  const handleSubmit=(event)=>{
    event.preventDefault()
    addMessage({
      author: AUTHOR.user,
      text
    })
    setText('')
  }

  return(
    <>
    <h1>Form</h1>
    <form onSubmit={handleSubmit}>
      <input
       type="text" 
       value={text}
       onChange={(event)=>{
        setText(event.target.value)
       }}
       />
      <Button className={styles.button} type="submit">Add Message</Button>
    </form>
    </>
  )
}
import { useState } from "react";
import styles from './Form.module.css'
import {Button} from '../UI/Button'

export function Form(){
  const [text, setText] = useState('')
  console.log(text)
  return(
    <>
    <h1>Form</h1>
    <form>
      <input
       type="text" 
       value={text}
       onChange={(event)=>{
        setText(event.target.value)
       }}
       />
      <Button>Add Message</Button>
    </form>
    </>
  )
}
import { useState, useEffect } from "react";
import styles from '../Form/Form.module.css'
//import { Button } from '../UI/Button'
import { AUTHOR } from "../../constants";
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import { useTheme } from "@emotion/react";



export function Form({ addMessage }) {

  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addMessage({
      author: AUTHOR.user,
      text
    })
    setText('')
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <ITextField
            autoFocus
            variant="outlined"
            size="small"
            label="Message"
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value)
            }}
          />
          <IButton
            variant="contained"
            type="submit"
            size="small"
          >Add Message</IButton>
        </div>
      </form>
    </>
  )
}
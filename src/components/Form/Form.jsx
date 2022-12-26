import { useState, useEffect } from "react";
import styles from '../Form/Form.module.css'
//import { Button } from '../UI/Button'
import { AUTHOR } from "../../constants";
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';

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
      <form onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <ITextField
            inputRef={input => input && input.focus()}
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
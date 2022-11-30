import { useState } from "react"

import styles from './Form.module.css'

export function Form(){
  const [count, setCount] = useState(0)
  const [name, setName] = useState('biba')

  const handleClick =() =>{
    setCount(count+1)
  }
  const handleChange=(event)=>{
    setName(event.target.value)
  }
  return (
    <>
    <h1 style={{color:'green'}}>Function component</h1>
      <h2 className={styles.border}>Name:{name}</h2>
     <input type="text" onChange={handleChange}/>
     <p>Count:{count}</p>
     <button onClick={handleClick}>Click</button>
    </>
  ) 
}
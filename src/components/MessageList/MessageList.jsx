
import styles from './MessageList.module.css'
export function MessageList({messages}){
  return(
    <>
    <h1>MessageList</h1>
    <ul>
    {messages.map((item, index) => (
        <li className={styles.listMessage} key={index}>{item.text}</li>
    ))}
    </ul>
    </>
  )
}
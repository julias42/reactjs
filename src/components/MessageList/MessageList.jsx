
import styles from './MessageList.module.css'
//import InboxIcon from '@mui/icons-material/Inbox';

export function MessageList({ messages }) {
  return (
    <>
      <ul>
        {messages.map((item, index) => (
          <li className={styles.listMessage} key={index}>{item.text}</li>
        ))}
      </ul>
    </>
  )
}
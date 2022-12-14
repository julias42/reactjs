import { useState, useEffect } from 'react';
import styles from '../src/index.css'
import { MessageList } from './components/MessageList/MessageList';
import { Form } from './components/Form/Form'
import { AUTHOR } from './constants'
import { ChatList } from './components/ChatList/ChatList'

export function App() {
  const [messages, setMessages] = useState([])

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage])
  }
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'Im BOT'
        })
      }, 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages])
  return (
    <>
      <h1>Welcome to chat!</h1>
      <Form addMessage={addMessage} />
      <div className={styles.wrapper}>
        <MessageList messages={messages} />
        <ChatList />
      </div>
    </>
  )
}
export default App
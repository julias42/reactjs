import { useState } from 'react';
import shortid from 'shortid';
import { MessageList } from './components/MessageList/MessageList';
import{ Form }from './components/Form/Form'

function App(){

  return(
    <>
    <h1>Welcome to chat!</h1>
    <Form/>
    <MessageList/>
    </>
  )
}
export default App
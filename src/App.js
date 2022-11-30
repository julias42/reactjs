import { useState } from 'react';
import shortid from 'shortid';
import {Form} from './components/classes/Form';
import {Form as FormFunc} from './components/func/Form';
import { Message } from './components/func/Message';

function App(){
const [toggle,setToggle] = useState(true)
const [arr,setArr]= useState([{name:'biba'},{name:'boba'},{name:'giga'},{name:'goga'}])
  return(
    <>
    <Form />
    <hr />
    <button onClick={()=>setToggle(!toggle)}>{toggle?'hide':'show'}</button>
    {toggle && <FormFunc />}
    <ul>
   {arr.map((item)=>( 
      <li key={shortid.generate()}>{item.name}</li>
    ))}
    </ul>
    <Message title='Message component'/>
    </>
  )
}
export default App
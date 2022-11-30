import { type } from '@testing-library/user-event/dist/type'
import React, {Component} from 'react'
export class Form extends Component{

  state={
    name:'Biba',
    count: 0
  }
  handleChange= (event) => {
    this.setState({name:event.target.value})
  }

  handleClick =(event)=>{
    this.setState({count:event.target.value++})
    
  }

  render(){
    return(
      <>
      <h1>Classes component</h1>
      <h2>Name:{this.state.name}</h2>
     <input type="text" onChange={this.handleChange}/>
     <p>Count:{this.state.count}</p>
     <button onClick={this.handleClick}>Click</button>
      </>
    )
  }
}
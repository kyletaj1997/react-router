import React, { Component } from 'react'
import ChildComp from './ChildComp'

class Parent extends Component {
      constructor() {
      super()
        this.state = {
            message: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
      }
    
     greetParent(){
         alert("Hi")
      }

    render(){
    return (
           <div>
               <ChildComp greetHandler={this.greetParent}></ChildComp>
           </div>
        
        )
    }
}
export default Parent
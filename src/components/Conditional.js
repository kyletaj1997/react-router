import React, { Component } from 'react'

class Conditional extends Component {
      constructor() {
      super()
        this.state = {
            login: false
        }
      
      }
    

    render(){
        if(this.state.login){
            return   <h1>True</h1>
            
        } else{
            return <h1>False</h1>
        }
   
    }
}
export default Conditional
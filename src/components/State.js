import React, { Component } from 'react'

class State extends Component {
      constructor() {
      super()
        this.state = {
            message: "Hi"
        }
      }
    
      MessageChange(){
          this.setState({
              message: "Thank you"
          })
      }

    render(){
    return (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={ () => this.MessageChange() }> Change</button>
              </div>
        
        );
    }
}
export default State
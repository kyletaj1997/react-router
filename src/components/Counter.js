import React, { Component } from 'react'

class Counter extends Component {
  

    render(){

      const  {count,incrementCount} = this.props
    return (

            <div>
            <h2>{count}</h2>
            <button onClick={incrementCount}> Change</button>
              </div>
            
        
        );
    }
}
export default Counter 
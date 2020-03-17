import React, { Component } from 'react';

class User extends Component {

    constructor() {
        super()
      
          this.state = {
              count: 0
          }
        }
      
       incrementCount = () =>{
            this.setState(prevState => {
               return {count: this.state.count + 1 }
            })
        }
    render() {
        return ( 
            <div>
                {this.props.render(this.state.count,this.incrementCount )}
            </div>
        );
    }
}

export default User;
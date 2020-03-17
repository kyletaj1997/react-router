import React, { Component } from 'react';


const UpdatedComponent = OriginalComponent =>{
  
    class NewComponent extends React.Component {

        constructor() {
            super()
          
              this.state = {
                  counter: 1
              }
            }
            
            MessageChange(){
                this.setState({
                    counter: this.state.counter + 1
                })
            }
      
        render() {
            return (
                <div>
                  <OriginalComponent counter={this.state.counter} incrementcount={this.MessageChange.bind(this)}></OriginalComponent>  
                </div>
            )
        }
       
    }
    
    return NewComponent
}

export default HOC;
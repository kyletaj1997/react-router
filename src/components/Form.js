import React, { PureComponent } from 'react';



class Form extends PureComponent {
    constructor(props){
        super(props)
            this.state={
               username:'',
               select:'' 
            }

            this.testVarible= "";
     }

     handler = (event) =>{
         this.setState({
            username:event.target.value
         })

     }

     handler1 = (event) =>{
        this.setState({
           topic:event.target.value
        })
    }
    

        render() {
            return (
                <div>
                    <input type="text" value={this.state.username} onChange={this.handler.bind(this)}></input>
                    <select value={this.state.topic} onChange={this.handler1.bind(this)}>
                        <option value="react"> awd</option>
                        <option value="wow"> aaa</option>
                    </select>
                      
                    <table>
                       
                       
                             <h1>{this.state.username}</h1>
                        </table>
                </div>
            );
        }
}

export default Form;
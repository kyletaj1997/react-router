import React, { Component } from 'react';
import axios from 'axios'

class PostForm extends Component {

    constructor(){
        super()
        this.state = {
           id:'',
           title:'',
           body:''
        }
       
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHander = this.submitHander.bind(this);
    }
    
    changeHandler(e){
        this.setState({ [e.target.name] : e.target.value })
    }

    submitHander(e){
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',
            this.state
        ).then(response=>{ 
             console.log(response)
        }).catch(function (error) {
         console.log(error);
     });
    }

    render() {
        const { id ,title,body} = this.state
        return (
            <div>
              <form onSubmit={this.submitHander}>
                <div>
                    <input type="text" name="id" value={id} onChange={this.changeHandler}></input>
                </div>
                <div>
                    <input type="text" name="title" value={title} onChange={this.changeHandler} ></input>
                </div>
                <div>
                    <input type="text" name="body" value={body} onChange={this.changeHandler} ></input>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
        );
    }
}

export default PostForm;
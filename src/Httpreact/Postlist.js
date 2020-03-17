import React, { Component } from 'react';
import axios from 'axios'


class Postlist extends Component {
    constructor(props){
        super(props)
 
        this.state={
            posts:[]
        }
 
    }
 
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
             console.log(response)
             this.setState({
                 post:response.data
             })
         }).catch(error=>{
             console.log(error)
         })
     }
 
     render() {
        const { posts } =this.state
         return (
             <div>
             {
                        this.state.posts.map(
                            data => 
                            <div>
                            <h4> {data.id} </h4>
                            </div>
                        )
                      }
        
               
             </div>
         )
     }
 }


export default Postlist ;
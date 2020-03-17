import React, { useState,useEffect } from 'react';
import axios from 'axios'

function DataFetching(props) {
  const [post , setPost] = useState({})
  const [id , setID] = useState(1)
  const [idB , setIDB] = useState(1)
   
  const submitHandler = () => {
    setIDB(id)
  } 

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/'+idB).then(res=>{
     setPost(res.data)
  }).catch(error=>{
        console.log(error)
    })
  },[idB])

    return (
        <div> 
            <input type="text" value={id} onChange={e=>setID(e.target.value)}></input>
            <button onClick={submitHandler}>click</button>
            <div>title : {post.title}</div>
            {/*post.map(post=>(
                <h2>{post.title}</h2>
            ))*/}
        </div>
    );
}

export default DataFetching;
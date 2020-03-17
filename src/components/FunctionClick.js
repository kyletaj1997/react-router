import React, { Component } from 'react'

function FunctionClick(){

  const names = ['awdawd','kyle']

    return (
       
           <div>
              {names.map(name => <h1>{name}</h1>)}
           </div>
        
        
    )

}

export default FunctionClick
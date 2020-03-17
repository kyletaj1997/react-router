import React, { Component } from 'react'

function PersonList({person}){

    return (
       
           <div>
             <h1>{person.name} and {person.age}</h1>
           </div>
        
        
    )

}

export default PersonList
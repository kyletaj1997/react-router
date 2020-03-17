import React, { Component } from 'react'
import PersonList from './PersonList'
import './MyCss.css'

const heading = {
     color:"red"
}

function NameList(){

  const person= ['kyle','tajores']

    return (
       
           <div>
              {person.map((person , index ) => <h1 className="font" style={heading } key={index}> {index} {person} </h1> )}
           </div>
        
        
    )

}

export default NameList
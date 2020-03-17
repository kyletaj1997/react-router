import React, { Component } from 'react'
const Third = ({name , children}) => {
   
    return (
        <div>
    <h1> {name}</h1>
    {children}
    </div>
    )

}

export default Third
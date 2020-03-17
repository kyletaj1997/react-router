import React, { useState,useEffect } from 'react';

function HookMouse(props) {
const [X,setMovementX] = useState(0)
const [Y,setMovementY] = useState(0)

const logMousePosition = e => {
   console.log ("Mouse Event")
    setMovementX(e.clientX)
    setMovementY(e.clientY)
  
    
}
   
useEffect(()=>{
    console.log('updating')
    window.addEventListener('mousemove',logMousePosition)
    return () =>{
        console.log("remove")
        window.removeEventListener('mousemove',logMousePosition)
    }
},[])

    return (
        <div>
            Hooks x = {X} and y= {Y}
        </div>
    );
}

export default HookMouse;
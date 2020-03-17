
import React, { useState,useEffect,useRef } from 'react';

function Focus(props) {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input ref={inputRef}></input>
        </div>
    );
}

export default Focus;
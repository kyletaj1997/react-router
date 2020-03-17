import React, { useState,useEffect } from 'react';
import HookMouse from './HookMouse';
function MouseContainer(props) {
    const [display , setDisplay]= useState(true)
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Toogle display</button>
            {display && <HookMouse></HookMouse>}
        </div>
    );
}

export default MouseContainer;
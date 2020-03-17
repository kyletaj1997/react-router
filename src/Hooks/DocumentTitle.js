import React, { useState,useEffect,useMemo } from 'react';

function DocumentTitle(props) {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        document.title=count
    },[count])

    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Count {count}</button>
        </div>
    );
}

export default DocumentTitle;
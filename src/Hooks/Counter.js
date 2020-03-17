import React, { useState,useEffect,useMemo } from 'react';

function Counter() {
  
    const [count,setCount] = useState(0)
    const [count1 , setCount1] = useState(0)
    
    
    const incrementOne = ()=>{
        setCount(count+1)
    }

    const incrementTwo= ()=>{
        setCount1(count1+1)
    }

    const isEven = useMemo(() => {
        let i = 0 
        while (i < 200000000) i++
        return count  % 2 == 0 

    },[count])

        return (
            <div>
                <button onClick={incrementOne}>Count {count}</button><span>{isEven ? 'Even':'Odd'}</span><br></br>
                <button onClick={incrementTwo}>Count {count1}</button>
            </div>
        )
    
}

export default  Counter;
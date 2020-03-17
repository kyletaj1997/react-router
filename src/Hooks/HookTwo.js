import React ,{useState} from 'react';

function HookTwo() {
    const initial = 0
    const [count,setCount] = useState(initial)

    const IncrementFive = () =>{
        for(let i=0; i<5 ; i++){
            setCount(prevCount=>prevCount+1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={()=> setCount(initial)}> Reset</button>
            <button onClick={()=> setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=> setCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={IncrementFive}>Increment Five</button>
        </div>
    );
}

export default HookTwo;
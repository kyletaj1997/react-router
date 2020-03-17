import React, { useState,useEffect,useMemo } from 'react';

function User1(initialvalue) {
    const[value,setValue] = useState(initialvalue)
    const reset=()=>{
        setValue(initialvalue)
    }

    const bind = {
        value,
        onChange: e=> {
            setValue(e.target.value)
        }
    }

    return [value,bind,reset]
}

export default User1;
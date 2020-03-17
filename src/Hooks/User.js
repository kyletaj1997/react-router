import React, { useState,useEffect,useMemo } from 'react';
import Userss from './User1'

function User(props) {
    const [firstName,bindFirstName,resetFirstName] = Userss('')
    const [lastName, setlastName] = useState('')


    const submit=(e)=>{
    e.preventDefault()
    alert(""+ firstName +" and "+ lastName)
    resetFirstName()
    }


    return (
        <div>
            <input type="text" value={firstName} {...bindFirstName} /> 
            <input type="text" value={lastName}/> 
            <button onClick={submit}>Submit</button>
        </div>
    );
}

export default User;
import React, {useState} from 'react';

function HookThree(props) {
    const [name,setName] = useState({firstName:'',Lastname:''})
    return (
        <div>
            
            <form>

                <input type="text" value={name.firstName} onChange={ e=> setName({ ...name , firstName:e.target.value})}></input>
                <input type="text" value={name.Lastname} onChange={ e=> setName({ ...name , Lastname:e.target.value})}></input>

                <h1>your name is {name.firstName}</h1>
                 <h1>your last name is {name.Lastname}</h1>
            </form>

        </div>
    );
}

export default HookThree;
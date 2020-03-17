import React, {useContext} from 'react';
import F from './F'
import {UserContext} from '../App'

function E() {
    const a = useContext(UserContext)

    return (
        <div>
            {a}
        </div>
    );
}

export default E;
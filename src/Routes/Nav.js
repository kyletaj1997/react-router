import React from 'react';
import  { Link} from 'react-router-dom';
function Nav(props) {
    return (
        <nav>
            <ul>
                <Link to ='/'>
                <li>About</li>
                </Link>
                <Link to ='/List'>
                <li>List</li>
                </Link>
                <Link to ='/News'>
                <li>News</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
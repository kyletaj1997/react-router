import React, { Component } from 'react';
import { UserConsumer } from './UserContext'

class C extends Component {
    render() {
        return (
                <UserConsumer>
                {
                    (username)=>
                    {
                        return <div> Hello {username} </div>
                    }
                }
             </UserConsumer>
        );
    }
}

export default C;
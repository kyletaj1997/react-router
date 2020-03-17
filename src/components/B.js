import React, { Component } from 'react';
import C from './C'
import UserContext from './UserContext';
class B extends Component {
    render() {
        return (
            <div>
            Component B Context {this.context}
            <C></C>
            </div>
        ); 
    }
}

Component.contextType = UserContext
export default B;
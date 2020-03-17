import React, { Component } from 'react';
import ReactDOM from 'react-dom'
class PortalsDemo extends Component {
    render() {
        return ReactDOM.createPortal(
            <div><h1> Portal</h1></div> ,document.getElementById('portal-root')
        );
    }
}

export default PortalsDemo;
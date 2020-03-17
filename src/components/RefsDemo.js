import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()

    }
  
    componentDidMount(){
        this.inputRef.current.focus()
    }
    
    Handler(){
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.Handler.bind(this)}>Click</button>
            </div>
        );
    }
}

export default RefsDemo;
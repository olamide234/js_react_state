import React, {Component} from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {color: 'cyan'} //there is no 'this' if super constructor wasn't called
    }
    render(){
        return (
            <h1>DEMO COMPONENT!</h1>
        )
    }
}

// don't call setState inside constructor and render method 
// instaed call setState inside any other instance method apart from those two

export default Demo;
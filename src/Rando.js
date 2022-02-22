import React, {Component} from 'react';

//this component save random number to be set in a state using timer
class Rando extends Component {
    constructor(props) {
        super(props);
        this.state = {num: 0};
        this.makeTimer(); //this is weird and unconventional but has to be set here since there's no event attached.
    }
    makeTimer(){
        setInterval(() =>{
            let rand = Math.floor(Math.random() * this.props.maxNum);
            this.setState({num: rand});
        }, 1000);
    }
    render(){
        return (
            <h1>{this.state.num}</h1>
        )
    }
}

export default Rando;
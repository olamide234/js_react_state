import React, {Component} from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            gameOver: false
        }
    }
    // another way of writing state instead of how it's represented above
    //the syntax below isn't javascript conventional way, it require babel for conversion to js
    // state = {
    //     score: 0,
    //     gameOver: false
    // }
    render(){
        return (
            <div>
                <h1>Your Score Is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game;
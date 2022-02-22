//state most commonly changes in direct response to some event 
//in react, every JSX element has built-in attributes representing 
//every kind of browser event e.g 'onClick' 

import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <button 
                onClick={function() {
                    alert('Clicked!!');
                }}
            >
                Click Me!
            </button>
        );
    }
}
 
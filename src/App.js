import React, { Component } from 'react'
import './App.css';
import Game from "./Game"
import Demo from "./Demo"
import Rando from "./Rando"
import Button from "./Button"
import BrokenClick from "./BrokenClick"
import Clicker from "./Clicker"

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Game/>
        <Demo animal="Bobcat" food="pineapple"/>
        <Rando maxNum={7}/>
        <Button/><br/>
        <BrokenClick/> */}
        <Clicker/>
      </div>
    )
  }
}


'use strict';

import React from 'react';
import Game from './Game'
import Header from './Header'

export default class PBody extends React.Component{
    constructor(){
        super()
        this.state = {
            guess: '',
            history: [1, 2, 3],
            currentFeedback: 'Make your Guess!',
            feedbackOptions: false
        }
    }

    setGuess(value) {
        this.setState(
            {guess: value}
        )
    }

    updateHistory(value) {
        this.setState(
            {history: [...this.state.history, value]}
        )
    }



    render(){
        return (
        [<Header />,
        <Game 
          feedback={this.state.currentFeedback}
           history={this.state.history} 
           guess={this.state.guess} 
           guessInput={value => this.setGuess(value)}
           clicked={(e) => {
               e.preventDefault();
               (console.log('test submit'))}}
           />]
        )

    }
}
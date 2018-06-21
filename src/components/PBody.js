'use strict';

import React from 'react';
import Game from './Game'
import Header from './Header'

export default class PBody extends React.Component{
    constructor(){
        super()
        this.state = {
            number: '36',
            guess: '',
            history: [],
            currentFeedback: 'Make your Guess!'
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

    checkGuess(){
        const guess = this.state.guess
        // console.log(guess)
        if(guess === ''){
            alert('please input a number');
        }
        else if(guess % 1 !== 0){
            alert('please input an integer')
        }
        else if(guess >100 || guess < 1){
            alert('please choose a number between zero and 100');
        }
        else if(this.state.history.includes(guess)){
            alert('You guessed this number already');
        }
        else{
            this.updateHistory(guess)
            this.updateFeedback();
        }
        this.setGuess('')
    }

    updateFeedback() {
        const guess = this.state.guess;
        const diff = Math.abs(guess - this.state.number)
        if (guess === this.state.number) {
            this.setState( 
                {currentFeedback: 'You guessed it!!'}
            )
        } else if (diff <= 10) {
            this.setState( 
                {currentFeedback: 'Hot!'}
            )
        } else {
            this.setState( 
                {currentFeedback: 'Cold :('}
            )
        }
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
               this.checkGuess()}}
           />]
        )

    }
}
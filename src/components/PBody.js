'use strict';

import React from 'react';
import Game from './Game'
import Header from './Header'

export default class PBody extends React.Component{
    constructor(){
        super()
        this.state = {
            guess: '',
            history: [],
            currentFeedback: 'Make your Guess!',
            feedbackOptions: false
        }
    }

    render(){
        return (
        [<Header />,
        <Game feedBack={this.state.currentFeedback} />]
        )

    }
}
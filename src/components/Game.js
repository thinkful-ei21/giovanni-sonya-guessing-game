'use strict';

import React from 'react';
import Feedback from './Feedback';
import Input from './Input';
import GuessNum from './GuessNum';
import Guesses from './Guesses';

export default function Game(props){

    return (
    
    <section class="game"> 
        <Feedback feedback={props.feedback} />
        <Input />
        <GuessNum number='23'/>
        <Guesses numbers={[1,3,5,7,9]} />
	</section>
    )
};
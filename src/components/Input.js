'use strict';

import React from 'react';

export default function Input(props){

    return (
    <form onSubmit={(e) => props.clicked(e)}>

	    <input type="text" name="userGuess" id="userGuess" 
        className="text" maxLength="3" autoComplete="off" 
        placeholder="Enter your Guess" required="" value={props.guess}
        onChange={e => props.guessInput(e.currentTarget.value)}
        >
        </input>
        <input type="submit" id="guessButton" className="button" name="submit" 
        value="Guess" >
        </input>
    </form>
    )
};

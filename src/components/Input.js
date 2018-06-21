'use strict';

import React from 'react';

export default function Input(){

    return (
    <form>
	    <input type="text" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required="">
        </input>
        <input type="submit" id="guessButton" className="button" name="submit" value="Guess">
        </input>
    </form>
    )
};

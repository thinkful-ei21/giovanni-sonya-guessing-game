import React from 'react';

export default function GuessNum(props){

    const numbers = props.numbers.map(number => <li>{number}</li>)

    return (
        <ul id="guessList" class="guessBox clearfix">  
        {numbers}
        </ul>
    )
};


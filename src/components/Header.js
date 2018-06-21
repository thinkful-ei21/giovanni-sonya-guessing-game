import React from 'react';

export default function Header(props){

    return ([    		
    	<nav> 
        <ul className="clearfix">
            <li><a onClick={()=>props.toggleOverlay()} className="what" href="#">What ?</a></li>
            <li><a onClick={()=>props.resetState()} className="new" href="#">+ New Game</a></li>
        </ul>
        </nav>,
        <h1>HOT or COLD</h1>
    ])
};

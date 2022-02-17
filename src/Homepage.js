import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Game.css';

function Homepage(){
    const [name, setName] = useState('');
    // {console.log(name)}
    localStorage.setItem("playerName", name);
    // var x = localStorage.getItem("playerName");
    // console.log("This is from local storage: ", x)
    return(
        <>
        <h1>Welcome to the Hangman Game</h1>
        <div className="player-name">
            <input
            type="text"
            className="player"
            placeholder="Enter Your Name"
            onChange={e => setName(e.target.value)}
            />
            <Link to='/game'>
            <input 
            type="submit" 
            value="Submit"
            />
            </Link>
        </div>
        </>
    )
}

export default Homepage
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checkWin } from '../helpers/helpers';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  function homeBtn (){
    localStorage.clear();
  }
  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
        <Link to='/'>
           <button onClick={homeBtn}>Homepage</button>
        </Link>
      </div>
    </div>
  )
}

export default Popup
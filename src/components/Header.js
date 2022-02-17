import React from 'react'

// rafce
const Header = () => {
  return (
    <div className='header'>
      <div className='heading'>
        <h1>Hangman</h1>
        <p>Find the hidden word - Enter a letter</p>
        <p>Player Name: {localStorage.getItem("playerName")}</p>
      </div>
    </div>
  )
}

export default Header

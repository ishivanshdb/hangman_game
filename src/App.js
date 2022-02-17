import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'
import Game from './Game'

function App(){

    return(
        <>
        <Router>
            <div>
                <Routes>
                    <Route path="/" exact element={<Homepage />}/>
                    <Route path="/game" element={<Game />} />
                </Routes>
            </div>
       
        </Router>
        </>
    )
}

export default App
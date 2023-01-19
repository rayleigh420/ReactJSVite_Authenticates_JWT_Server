import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
    return (
        <>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path='/home' />
                <Route path='/contact' />
            </Routes>
        </>

        // <h2>HEllo</h2>
    )
}

export default App

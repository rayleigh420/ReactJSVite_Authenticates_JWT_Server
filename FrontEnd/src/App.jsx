import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SignUpPage from './pages/signUpPage'

function App() {
    return (
        <>
            <Routes>
                <Route path='/signIn' />
                <Route path='/signUp' element={<SignUpPage />} />
                <Route path='/action' />
            </Routes>
        </>

        // <h2>HEllo</h2>
    )
}

export default App

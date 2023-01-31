import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register"
import SignUpPage from "./pages/SignUpPage";
import axios from "axios";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <main className="App">
        {/* <Register /> */}
        <Login />
      </main>
      {/* <Routes>
        <Route path="/signIn" />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/action" />
      </Routes> */}
      {/* <h2>hello</h2> */}
    </>

    // <h2>HEllo</h2>
  );
}

export default App;

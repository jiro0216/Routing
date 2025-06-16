import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom'
import React, { useState } from 'react'

// page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser)
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My App</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {!user ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>Logout</button>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home user={user} onLogout={handleLogout} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

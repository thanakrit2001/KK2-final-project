import './App.css'
import { Layout } from './views/_Layout'
import { Routes, Route } from 'react-router'
import { Signin } from './views/SignIn'
import { Register } from './views/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

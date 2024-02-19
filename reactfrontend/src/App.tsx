import './App.css'
import { Layout } from './views/_Layout';
import { Routes, Route } from 'react-router'
import { Signin } from './views/SignIn'
import { Register } from './views/Register'
import { ListPatient } from './views/Patiant/ListPatiant'
import { DetailPatient } from './views/Patiant/DetailPatient'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout> <ListPatient /> <DetailPatient /> </Layout>} />
        <Route path="/signin" element={<Signin updateTokenAndLoginStatus={(newToken, loggedInStatus) => { }} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

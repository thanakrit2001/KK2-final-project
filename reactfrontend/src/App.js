import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Patients from './views/patients';
import Login from './views/logIn';
import Home from './views/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Patients />} />
      </Routes>
    </Router>
  );
}

export default App;

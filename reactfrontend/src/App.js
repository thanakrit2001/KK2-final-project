import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Patients from "./views/patients";
import Login from "./views/logIn";
// import Home from "./views/home";
import Diagnosis,{ chart } from './views/diagnosis'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/logIn" element={<Login />} />
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/patients" element={<Patients />} />
        <Route path="/diagnosis" element={<Diagnosis  />} />
      </Routes>
    </Router>
  );
}

export default App;

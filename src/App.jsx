import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/HomeScreen/index";
import Login from "../src/pages/LoginScreen/index";
import Adm from "../src/pages/AdmScreen/index"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adm" element={<Adm />} />
      </Routes>
    </Router>
  );
}

export default App;

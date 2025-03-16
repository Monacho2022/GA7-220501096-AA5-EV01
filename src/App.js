import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./components/Registro";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h2 className="text-center">Sistema de Autenticación</h2>
        <Routes>
          <Route path="/register" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

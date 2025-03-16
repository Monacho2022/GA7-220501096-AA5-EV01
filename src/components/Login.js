import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", { username, password });
      alert(response.data.message);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert("Error en el login");
    }
  };

  return (
    <div>
      <h3>Iniciar Sesión</h3>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;

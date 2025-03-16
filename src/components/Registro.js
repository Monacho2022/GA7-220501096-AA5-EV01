import React, { useState } from "react";
import axios from "axios";

const Registro = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", { username, password });
      alert("Usuario registrado correctamente");
    } catch (error) {
      alert("Error en el registro");
    }
  };

  return (
    <div>
      <h3>Registro</h3>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;

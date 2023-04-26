import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Contato from './pages/Contato/Contato';
import './App.css';


import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';



function App() {
  return (
    <BrowserRouter>
    
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/contato" element={<Contato />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;

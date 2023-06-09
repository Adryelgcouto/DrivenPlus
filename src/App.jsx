import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/login/login";
import { Register } from "./components/register/register";
import { Planos } from "./components/planos/planos";
import { Subscriptions } from "./subscriptions/subscriptions";
import { useEffect } from "react";
import axios from "axios";



function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`
        https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up
        `);
        // Faça algo com a resposta
      } catch (error) {
        // Lide com erros
      }
    };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

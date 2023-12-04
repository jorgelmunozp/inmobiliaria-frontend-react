import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar"
import { HomeScreen } from "../components/home/HomeScreen";
import { ApartamentosScreen } from "../components/apartamentos/ApartamentosScreen";
import { CasasScreen } from "../components/casas/CasasScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { InmuebleScreen } from "../components/inmueble/InmuebleScreen";

import { useFetch } from "../hooks/useFetch";

const name = "react-inmobiliaria";

export const DashboardRoutes = () => {

  const urlApiApartamentos = process.env.REACT_APP_API_APARTAMENTOS;
  const apartamentos = useFetch(urlApiApartamentos).data;
  let [setApartamentos] = useState('');

  const urlApiCasas = process.env.REACT_APP_API_CASAS;
  const casas = useFetch(urlApiCasas).data;
  let [setCasas] = useState('');

  return (
    <>
      <Navbar name={name} />

      <div className="container">
        <Routes>
            <Route path={"/:inmuebleId"} element={<InmuebleScreen />} />
            <Route path={name + "/apartamentos"} element={<ApartamentosScreen name={name} apartamentos={apartamentos} />} />
            <Route path={name + "/casas"} element={<CasasScreen casas={casas} />} />
            <Route path={name + "/search"} element={<SearchScreen apartamentos={apartamentos} casas={casas} />} />
            <Route path={"/" + name} element={<HomeScreen apartamentos={apartamentos} casas={casas} />} />
        </Routes>
      </div>
    </>
  )
}

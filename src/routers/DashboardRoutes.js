import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar"
import { HomeScreen } from "../components/home/HomeScreen";
import { ApartamentosScreen } from "../components/apartamentos/ApartamentosScreen";
import { CasasScreen } from "../components/casas/CasasScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { InmuebleScreen } from "../components/inmueble/InmuebleScreen";

import { useFetch } from "../hooks/useFetch";

const name = process.env.REACT_APP_URL_BASE_FRONTEND;

export const DashboardRoutes = () => {

  const urlApiInmuebles = process.env.REACT_APP_API_INMUEBLES;
  const inmuebles = useFetch(urlApiInmuebles).data;
  let [setInmuebles] = useState('');

  return (
    <>
      <Navbar name={name} />

      <div className="container">
        <Routes>
            <Route path={"/:inmuebleId"} element={<InmuebleScreen inmuebles={inmuebles} />} />
            <Route path={name + "/apartamentos"} element={<ApartamentosScreen inmuebles={inmuebles} />} />
            <Route path={name + "/casas"} element={<CasasScreen inmuebles={inmuebles} />} />
            <Route path={name + "/search"} element={<SearchScreen inmuebles={inmuebles} />} />
            <Route path={"/" + name} element={<HomeScreen inmuebles={inmuebles} />} />
        </Routes>
      </div>
    </>
  )
}

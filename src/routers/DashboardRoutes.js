import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/menu/Navbar"
import { HomeScreen } from "../components/home/HomeScreen";
import { ApartamentosScreen } from "../components/apartamentos/ApartamentosScreen";
import { CasasScreen } from "../components/casas/CasasScreen";
import { InmuebleScreen } from "../components/inmueble/InmuebleScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { StockScreen } from "../components/stock/StockScreen";

import { useFetch } from "../hooks/useFetch";

const name = process.env.REACT_APP_URL_BASE_FRONTEND;

export const DashboardRoutes = () => {

  const urlApiInmuebles = process.env.REACT_APP_API_INMUEBLES;
  const inmuebles = useFetch(urlApiInmuebles).data;
  let [setInmuebles] = useState('');

  const urlApiCategorias = process.env.REACT_APP_API_CATEGORIAS;
  const categorias = useFetch(urlApiCategorias).data;
  const urlApiTipos = process.env.REACT_APP_API_TIPOS;
  const tipos = useFetch(urlApiTipos).data;

  return (
    <>
      <Navbar name={name} />

      <div className="container user-select-none">
        <Routes>
            <Route path={"/:inmuebleId"} element={<InmuebleScreen inmuebles={inmuebles} />} />
            <Route path={name + "/apartamentos"} element={<ApartamentosScreen inmuebles={inmuebles} />} />
            <Route path={name + "/casas"} element={<CasasScreen inmuebles={inmuebles} />} />
            <Route path={name + "/search"} element={<SearchScreen inmuebles={inmuebles} categorias={categorias} tipos={tipos}/>} />
            <Route path={name + "/stock"} element={<StockScreen inmuebles={inmuebles} />} />
            <Route path={"/" + name} element={<HomeScreen inmuebles={inmuebles} />} />
        </Routes>
      </div>
    </>
  )
}

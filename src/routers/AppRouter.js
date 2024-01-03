import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Navbar } from "../components/menu/Navbar";
import { IndexScreen } from '../components/index/IndexScreen';
import { LoginScreen } from "../components/login/LoginScreen";
import { ApartamentosScreen } from "../components/apartamentos/ApartamentosScreen";
import { CasasScreen } from "../components/casas/CasasScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { InmuebleScreen } from "../components/inmueble/InmuebleScreen";

import { useFetch } from '../hooks/useFetch';

export const AppRouter = () => {
  const urlApiInmuebles = process.env.REACT_APP_API_INMUEBLES;
  const inmuebles = useFetch(urlApiInmuebles).data;

  const urlBaseFrontend = process.env.REACT_APP_URL_BASE_FRONTEND;

  const urlApiCategorias = process.env.REACT_APP_API_CATEGORIAS;
  const categorias = useFetch(urlApiCategorias).data;
  const urlApiTipos = process.env.REACT_APP_API_TIPOS;
  const tipos = useFetch(urlApiTipos).data;

  return (
    <BrowserRouter>
      <Navbar urlBaseFrontend={urlBaseFrontend} />

<div className="container user-select-none">

      <Routes>
        <Route path={"/index"} element={
          <PublicRoute>
            <IndexScreen inmuebles={inmuebles} />
          </PublicRoute>
        } />

        <Route path={urlBaseFrontend + "/apartamentos"} element={
          <PublicRoute>
            <ApartamentosScreen inmuebles={inmuebles} />
            </PublicRoute>
        } />

        <Route path={urlBaseFrontend + "/casas"} element={
          <PublicRoute>
            <CasasScreen inmuebles={inmuebles} />
            </PublicRoute>
        } />

        <Route path={urlBaseFrontend + "/search"} element={
          <PublicRoute>
            <SearchScreen inmuebles={inmuebles} categorias={categorias} tipos={tipos}/>
          </PublicRoute>
        } />

        <Route path={"/:inmuebleId"} element={
          <PublicRoute>
            <InmuebleScreen inmuebles={inmuebles} />
          </PublicRoute>
        } />


        <Route path={urlBaseFrontend + "/login"} element={
            <PublicRoute>
                <LoginScreen />
            </PublicRoute>
        } />

        <Route path="/*" element={
            <PrivateRoute>
                <DashboardRoutes />
            </PrivateRoute>
        } />

      </Routes>

            </div>
    </BrowserRouter>
  )
}

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { NavBar } from "../components/bars/menu/NavBar";
import { IndexScreen } from '../components/views/index/IndexScreen';
import { LoginScreen } from "../components/login/LoginScreen";
import { ApartamentosScreen } from "../components/views/apartamentos/ApartamentosScreen";
import { CasasScreen } from "../components/views/casas/CasasScreen";
import { SearchScreen } from "../components/views/search/SearchScreen";
import { InmuebleScreen } from "../components/views/inmueble/InmuebleScreen";
import { NotFound } from '../components/views/404/NotFound';
import { myColor, myTitle } from "../global";

export const AppRouter = () => {
  const urlBaseFrontend = process.env.REACT_APP_URL_BASE_FRONTEND;

  const urlApiInmuebles = process.env.REACT_APP_API_INMUEBLES;
  const inmuebles = useFetch(urlApiInmuebles).data;
  const urlApiCategorias = process.env.REACT_APP_API_CATEGORIAS;
  const categorias = useFetch(urlApiCategorias).data;
  const urlApiTipos = process.env.REACT_APP_API_TIPOS;
  const tipos = useFetch(urlApiTipos).data;
  const urlApiEstados = process.env.REACT_APP_API_ESTADOS;
  const estados = useFetch(urlApiEstados).data;
  const urlApiCaracteristicas = process.env.REACT_APP_API_CARACTERISTICAS;
  const caracteristicas = useFetch(urlApiCaracteristicas).data;
  const urlApiCountries = process.env.REACT_APP_API_COUNTRIES;
  const countries = useFetch(urlApiCountries).data;
 
  return (
    <BrowserRouter basename={"/" + urlBaseFrontend}>
      <NavBar myColor={myColor} myTitle={myTitle} />

      <div className="user-select-none">
        <Routes>
          <Route path={"/"} element={
            <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}>
              <IndexScreen inmuebles={inmuebles} />
            </PublicRoute>
          } />

          <Route path={"/index"} element={
            <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}>
              <IndexScreen inmuebles={inmuebles} />
            </PublicRoute>
          } />

          <Route path={"/apartamentos"} element={
            <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}>
              <ApartamentosScreen inmuebles={inmuebles} />
              </PublicRoute>
          } />

          <Route path={"/casas"} element={
            <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}>
              <CasasScreen inmuebles={inmuebles} />
              </PublicRoute>
          } />

          <Route path={"/search"} element={
            <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}>
              <SearchScreen inmuebles={inmuebles} categorias={categorias} tipos={tipos}/>
            </PublicRoute>
          } />

          <Route path={"/:inmuebleId"} element={
            <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}>
              <InmuebleScreen inmuebles={inmuebles} />
            </PublicRoute>
          } />

          <Route path={"/login"} element={
              <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}>
                  <LoginScreen myTitle={myTitle} myColor={myColor} />
              </PublicRoute>
          } />

          {/* <Route path='*' element={
              <NotFound myColor={myColor} myTitle={myTitle} />
          }/> */}

          <Route path={"/*"} element={
              <PrivateRoute>
                  <DashboardRoutes urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}/>
              </PrivateRoute>
          } />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

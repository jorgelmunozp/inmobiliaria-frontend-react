import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Navbar } from "../components/menu/Navbar";
import { IndexScreen } from '../components/views/index/IndexScreen';
import { LoginScreen } from "../components/views/login/LoginScreen";
import { ApartamentosScreen } from "../components/views/apartamentos/ApartamentosScreen";
import { CasasScreen } from "../components/views/casas/CasasScreen";
import { SearchScreen } from "../components/views/search/SearchScreen";
import { InmuebleScreen } from "../components/views/inmueble/InmuebleScreen";
import { NotFound } from '../components/views/404/NotFound';
import { myColor, myTitle } from "../global";

import { HomeScreen } from "../components/views/home/HomeScreen";
import { StockScreen } from "../components/views/stock/StockScreen";

export const AppRouter = () => {
  const urlBaseFrontend = process.env.REACT_APP_URL_BASE_FRONTEND;

  const urlApiInmuebles = process.env.REACT_APP_API_INMUEBLES;
  const inmuebles = useFetch(urlApiInmuebles).data;
  const urlApiCategorias = process.env.REACT_APP_API_CATEGORIAS;
  const categorias = useFetch(urlApiCategorias).data;
  const urlApiTipos = process.env.REACT_APP_API_TIPOS;
  const tipos = useFetch(urlApiTipos).data;

  return (
    <BrowserRouter>
      <Navbar urlBaseFrontend={urlBaseFrontend} myColor={myColor} myTitle={myTitle} />

      <div className="container user-select-none">
        <Routes>
          <Route path={"/" + urlBaseFrontend + "/index"} element={
            <PublicRoute urlBaseFrontend={urlBaseFrontend} urlApiInmuebles={urlApiInmuebles}>
              <IndexScreen inmuebles={inmuebles} />
            </PublicRoute>
          } />

          <Route path={urlBaseFrontend + "/apartamentos"} element={
            <PublicRoute urlBaseFrontend={urlBaseFrontend} urlApiInmuebles={urlApiInmuebles}>
              <ApartamentosScreen inmuebles={inmuebles} />
              </PublicRoute>
          } />

          <Route path={urlBaseFrontend + "/casas"} element={
            <PublicRoute urlBaseFrontend={urlBaseFrontend} urlApiInmuebles={urlApiInmuebles}>
              <CasasScreen inmuebles={inmuebles} />
              </PublicRoute>
          } />

          <Route path={urlBaseFrontend + "/search"} element={
            <PublicRoute urlBaseFrontend={urlBaseFrontend} urlApiInmuebles={urlApiInmuebles}>
              <SearchScreen inmuebles={inmuebles} categorias={categorias} tipos={tipos}/>
            </PublicRoute>
          } />

          <Route path={urlBaseFrontend + "/:inmuebleId"} element={
            <PublicRoute urlBaseFrontend={urlBaseFrontend} urlApiInmuebles={urlApiInmuebles}>
              <InmuebleScreen inmuebles={inmuebles} />
            </PublicRoute>
          } />

          <Route path={urlBaseFrontend + "/login"} element={
              <PublicRoute urlBaseFrontend={urlBaseFrontend} urlApiInmuebles={urlApiInmuebles}>
                  <LoginScreen />
              </PublicRoute>
          } />

          <Route path={"/" + urlBaseFrontend} element={
            <PublicRoute urlBaseFrontend={urlBaseFrontend} urlApiInmuebles={urlApiInmuebles}>
              <IndexScreen inmuebles={inmuebles} />
            </PublicRoute>
          } />

          <Route path='*' element={
            // <PublicRoute urlBaseFrontend={urlBaseFrontend}>
              <NotFound urlBaseFrontend={urlBaseFrontend} myColor={myColor} myTitle={myTitle} />
            // </PublicRoute>
          }/>

          <Route path={urlBaseFrontend + "/home"} element={
              <PrivateRoute urlBaseFrontend={urlBaseFrontend}>
                  <HomeScreen inmuebles={inmuebles}/>
              </PrivateRoute>
          } />

          <Route path={urlBaseFrontend + "/stock"} element={
              <PrivateRoute urlBaseFrontend={urlBaseFrontend}>
                  <StockScreen inmuebles={inmuebles}/>
              </PrivateRoute>
          } />

          <Route path={"/" + urlBaseFrontend} element={
              <PrivateRoute urlBaseFrontend={urlBaseFrontend}>
                  <HomeScreen inmuebles={inmuebles}/>
              </PrivateRoute>
          } />
          <Route path={"/"} element={
              <PrivateRoute urlBaseFrontend={urlBaseFrontend}>
                  <HomeScreen inmuebles={inmuebles}/>
              </PrivateRoute>
          } />

          <Route path={"/*"} element={
              <PrivateRoute urlBaseFrontend={urlBaseFrontend}>
                  <DashboardRoutes urlBaseFrontend={urlBaseFrontend} urlApiInmuebles={urlApiInmuebles}/>
              </PrivateRoute>
          } />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

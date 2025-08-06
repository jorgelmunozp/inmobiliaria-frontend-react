import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useFetch } from '../hooks/useFetch.js';
import { DashboardRoutes } from "./DashboardRoutes.js";
import { PrivateRoute } from "./PrivateRoute.js";
import { PublicRoute } from "./PublicRoute.js";
import { NavBar } from "../components/bars/menu/NavBar.js";
import { IndexScreen } from '../components/views/index/IndexScreen.js';
// import { ApartamentosScreen } from "../components/views/apartamentos/ApartamentosScreen.js";
// import { CasasScreen } from "../components/views/casas/CasasScreen.js";
import { myColor, myTitle } from "../global.js";

const ApartamentosScreen = lazy(() => import('../components/views/apartamentos/ApartamentosScreen'));
const CasasScreen = lazy(() => import('../components/views/casas/CasasScreen'));
const SearchScreen = lazy(() => import('../components/views/search/SearchScreen'));
const InmuebleScreen = lazy(() => import('../components/views/inmueble/InmuebleScreen'));
const LoginScreen = lazy(() => import('../components/login/LoginScreen'));
const HomeScreen = lazy(() => import('../components/views/home/HomeScreen'));
const InmuebleUpload = lazy(() => import('../components/views/inmueble/InmuebleUpload'));
const StockScreen = lazy(() => import('../components/views/stock/StockScreen'));

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
          <Route path={"*"} element={ <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}><IndexScreen inmuebles={inmuebles} /></PublicRoute> } />
          <Route path={"/"} element={ <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}><IndexScreen inmuebles={inmuebles} /></PublicRoute> } />
          <Route path={"/*"} element={ <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}><IndexScreen inmuebles={inmuebles} /></PublicRoute> } />
          <Route path={"/inicio"} element={ <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}><IndexScreen inmuebles={inmuebles} /></PublicRoute> } />
          <Route path={"/apartamentos"} element={ <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}><ApartamentosScreen inmuebles={inmuebles} /></PublicRoute> } />
          <Route path={"/casas"} element={ <PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}><CasasScreen inmuebles={inmuebles} /></PublicRoute> } />
          <Route path={"/search"} element={ <Suspense fallback={<center><div className="loader"></div></center>}><PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}><SearchScreen inmuebles={inmuebles} categorias={categorias} tipos={tipos}/></PublicRoute></Suspense> } />
          <Route path={"/:inmuebleId/*"} element={ <Suspense fallback={<center><div className="loader"></div></center>}><PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}><InmuebleScreen inmuebles={inmuebles} /></PublicRoute></Suspense> } />
          <Route path={"/login"} element={ <Suspense fallback={<center><div className="loader"></div></center>}><PublicRoute urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}><LoginScreen myTitle={myTitle} myColor={myColor} /></PublicRoute></Suspense> } />

          <Route path={"/"} element={ <Suspense fallback={<center><div className="loader"></div></center>}><PrivateRoute><HomeScreen inmuebles={inmuebles} /></PrivateRoute></Suspense> } />
          <Route path={"/*"} element={ <Suspense fallback={<center><div className="loader"></div></center>}><PrivateRoute><HomeScreen inmuebles={inmuebles} /></PrivateRoute></Suspense> } />
          <Route path={"/home"} element={ <Suspense fallback={<center><div className="loader"></div></center>}><PrivateRoute><HomeScreen inmuebles={inmuebles} /></PrivateRoute></Suspense> } />
          <Route path={"/:inmuebleId/*"} element={ <Suspense fallback={<center><div className="loader"></div></center>}><PrivateRoute><InmuebleScreen inmuebles={inmuebles} /></PrivateRoute></Suspense> } />
          <Route path={"/upload"} element={ <Suspense fallback={<center><div className="loader"></div></center>}><PrivateRoute><InmuebleUpload urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}/></PrivateRoute></Suspense> } />
          <Route path={"/stock"} element={ <Suspense fallback={<center><div className="loader"></div></center>}><PrivateRoute><StockScreen inmuebles={inmuebles} urlApiInmuebles={urlApiInmuebles} /></PrivateRoute></Suspense> } />

          <Route path={"/*"} element={ <Suspense fallback={<center><div className="loader"></div></center>}><PrivateRoute><DashboardRoutes urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={countries}/></PrivateRoute></Suspense> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter;
import { Routes, Route } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Suspense, lazy } from "react";
const HomeScreen = lazy(() => import('../components/views/home/HomeScreen'));
const InmuebleScreen = lazy(() => import('../components/views/inmueble/InmuebleScreen'));
const InmuebleUpload = lazy(() => import('../components/views/inmueble/InmuebleUpload'));
const StockScreen = lazy(() => import('../components/views/stock/StockScreen'));

export const DashboardRoutes = ({ urlApiInmuebles, categorias, tipos, estados, caracteristicas, paises }) => {
  const inmuebles = useFetch(urlApiInmuebles).data;

  return (
    <div className="container user-select-none">
      <Routes>
          <Route path={"/home"} element={<Suspense fallback={<center><div className="loader"></div></center>}><HomeScreen inmuebles={inmuebles} /></Suspense>} />
          <Route path={"/:inmuebleId/*"} element={<InmuebleScreen inmuebles={inmuebles} />} />
          <Route path={"/upload"} element={<Suspense fallback={<center><div className="loader"></div></center>}><InmuebleUpload urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={paises}/></Suspense>} />
          <Route path={"/stock"} element={<Suspense fallback={<center><div className="loader"></div></center>}><StockScreen inmuebles={inmuebles} urlApiInmuebles={urlApiInmuebles} /></Suspense>} />
          <Route path={"/"} element={<Suspense fallback={<center><div className="loader"></div></center>}><HomeScreen inmuebles={inmuebles} /></Suspense>} />
          <Route path={"/*"} element={<Suspense fallback={<center><div className="loader"></div></center>}><HomeScreen inmuebles={inmuebles} /></Suspense>} />
      </Routes>
    </div>
  )
}

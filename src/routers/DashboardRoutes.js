import { Routes, Route } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { HomeScreen } from "../components/views/home/HomeScreen";
import { InmuebleScreen } from '../components/views/inmueble/InmuebleScreen';
import { InmuebleUpload } from '../components/views/inmueble/InmuebleUpload';
import { StockScreen } from "../components/views/stock/StockScreen";

export const DashboardRoutes = ({ urlApiInmuebles, categorias, tipos, estados, caracteristicas, paises }) => {
  const inmuebles = useFetch(urlApiInmuebles).data;

  return (
    <div className="container user-select-none">
      <Routes>
          <Route path={"/home"} element={<HomeScreen inmuebles={inmuebles} />} />
          <Route path={"/:inmuebleId/*"} element={<InmuebleScreen inmuebles={inmuebles} />} />
          <Route path={"/upload"} element={<InmuebleUpload urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={paises}/>} />
          <Route path={"/stock"} element={<StockScreen inmuebles={inmuebles} urlApiInmuebles={urlApiInmuebles} />} />
          <Route path={"/"} element={<HomeScreen inmuebles={inmuebles} />} />
      </Routes>
    </div>
  )
}

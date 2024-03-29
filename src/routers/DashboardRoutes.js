import { Routes, Route } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { HomeScreen } from "../components/views/home/HomeScreen";
import { InmuebleScreen } from '../components/views/inmueble/InmuebleScreen';
import { InmuebleUpload } from '../components/views/inmueble/InmuebleUpload';
import { StockScreen } from "../components/views/stock/StockScreen";

export const DashboardRoutes = ({ urlBaseFrontend, urlApiInmuebles, categorias, tipos, estados, caracteristicas, paises }) => {
  const inmuebles = useFetch(urlApiInmuebles).data;

  return (
    <div className="container user-select-none">
      <Routes>
          <Route path={urlBaseFrontend + "/home"} element={<HomeScreen inmuebles={inmuebles} />} />
          <Route path={urlBaseFrontend + "/upload"} element={<InmuebleUpload urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={paises}/>} />
          <Route path={urlBaseFrontend + "/stock"} element={<StockScreen inmuebles={inmuebles} urlApiInmuebles={urlApiInmuebles} />} />
          <Route path={urlBaseFrontend + "/inventario"} element={<StockScreen inmuebles={inmuebles} urlApiInmuebles={urlApiInmuebles} />} />
          <Route path={urlBaseFrontend + "/:inmuebleId"} element={<InmuebleScreen inmuebles={inmuebles} />} />
          {/* <Route path={"/" + urlBaseFrontend} element={<HomeScreen inmuebles={inmuebles} />} /> */}
          {/* <Route path={urlBaseFrontend + "/*"} element={<HomeScreen inmuebles={inmuebles} />} /> */}
          {/* <Route path={"/" + urlBaseFrontend + "/*"} element={<HomeScreen inmuebles={inmuebles} />} /> */}
          <Route path={"/"} element={<HomeScreen inmuebles={inmuebles} />} />
          {/* <Route path={"/*"} element={<HomeScreen inmuebles={inmuebles} />} /> */}
      </Routes>
    </div>
  )
}

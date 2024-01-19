import { Routes, Route } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { HomeScreen } from "../components/views/home/HomeScreen";
import { InmuebleUpload } from '../components/views/inmueble/InmuebleUpload';
import { StockScreen } from "../components/views/stock/StockScreen";

export const DashboardRoutes = ({ urlBaseFrontend, urlApiInmuebles, categorias, tipos, estados, caracteristicas }) => {
  const inmuebles = useFetch(urlApiInmuebles).data;

  return (
    <div className="container user-select-none">
      <Routes>
          <Route path={urlBaseFrontend + "/home"} element={<HomeScreen inmuebles={inmuebles} />} />
          <Route path={urlBaseFrontend + "/upload"} element={<InmuebleUpload inmuebles={inmuebles} urlApiInmuebles={urlApiInmuebles} urlBaseFrontend={urlBaseFrontend} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas}/>} />
          <Route path={urlBaseFrontend + "/stock"} element={<StockScreen inmuebles={inmuebles} urlApiInmuebles={urlApiInmuebles} />} />
          <Route path={urlBaseFrontend + "/inventario"} element={<StockScreen inmuebles={inmuebles} urlApiInmuebles={urlApiInmuebles} />} />
          {/* <Route path={"/" + urlBaseFrontend} element={<HomeScreen inmuebles={inmuebles} />} /> */}
          <Route path={urlBaseFrontend + "/*"} element={<HomeScreen inmuebles={inmuebles} />} />
          <Route path={"/" + urlBaseFrontend + "/*"} element={<HomeScreen inmuebles={inmuebles} />} />
          <Route path={"/"} element={<HomeScreen inmuebles={inmuebles} />} />
          <Route path={"/*"} element={<HomeScreen inmuebles={inmuebles} />} />
      </Routes>
    </div>
  )
}

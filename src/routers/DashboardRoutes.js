import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "../components/views/home/HomeScreen";
import { StockScreen } from "../components/views/stock/StockScreen";

import { useFetch } from "../hooks/useFetch";

export const DashboardRoutes = ({ urlBaseFrontend,urlApiInmuebles }) => {
  const inmuebles = useFetch(urlApiInmuebles).data;

  return (
    <div className="container user-select-none">
      <Routes>
          <Route path={urlBaseFrontend + "/stock"} element={<StockScreen inmuebles={inmuebles} />} />
          <Route path={urlBaseFrontend + "/home" + urlBaseFrontend} element={<HomeScreen inmuebles={inmuebles} />} />
          <Route path={"/"} element={<HomeScreen inmuebles={inmuebles} />} />
      </Routes>
    </div>
  )
}

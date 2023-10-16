import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/ui/Navbar"
import { ApartamentosScreen } from "../components/apartamentos/ApartamentosScreen";
import { CasasScreen } from "../components/casas/CasasScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { InmuebleScreen } from "../components/inmueble/InmuebleScreen";

const name = "react-inmobiliaria";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar name={name} />

      <div className="container">
        <Routes>
            <Route path={"/:inmuebleId"} element={<InmuebleScreen />} />
            <Route path={name + "/apartamentos"} element={<ApartamentosScreen name={name} />} />
            <Route path={name + "/casas"} element={<CasasScreen />} />
            <Route path={name + "/search"} element={<SearchScreen />} />
            <Route path={"/" + name} element={<ApartamentosScreen />} />
        </Routes>
      </div>
    </>
  )
}

import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/ui/Navbar"
import { ApartamentosScreen } from "../components/apartamentos/ApartamentosScreen";
import { CasasScreen } from "../components/casas/CasasScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { InmuebleScreen } from "../components/inmueble/InmuebleScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
            <Route path="inmueble/:inmuebleId" element={<InmuebleScreen />} />
            <Route path="apartamentos" element={<ApartamentosScreen />} />
            <Route path="casas" element={<CasasScreen />} />
            <Route path="search" element={<SearchScreen />} />
            <Route path="/" element={<ApartamentosScreen />} />
        </Routes>
      </div>
    </>
  )
}

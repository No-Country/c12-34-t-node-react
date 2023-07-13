import { Route, Routes } from "react-router-dom";

import {
  Bienes,
  BienesMaquinas,
  SectionClients,
  SectionProvider,
  SectionStaff,
} from "../../componentes/index";
import Sidebar from "./Components/Sidebar";
import Horarios from "./Components/Horarios";
import Footer from "./Components/Footer";

const HomePrincipal = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <Routes>
          <Route
            path="/admin"
            element={<h1>acá iria el componente admin</h1>}
          />
          <Route path="/bienes" element={<Bienes />} />
          <Route path="/bienes/maquinas" element={<BienesMaquinas />} />
          <Route path="/staff" element={<SectionStaff />} />
          <Route path="/clientes" element={<SectionClients />} />
          <Route path="/proovedores" element={<SectionProvider />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route
            path="/reservas"
            element={<h1>acá iria el componente reservas</h1>}
          />
          <Route
            path="/gastos"
            element={<h1>acá iria el componente gastos</h1>}
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default HomePrincipal;

import "./Home.css";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";

import {
  MdOutlineDashboard,
  MdOutlineBrowseGallery,
  MdOutlineCalendarMonth,
  MdOutlineCurrencyExchange,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

export const Home = () => {

  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "Perfil administrador", link: "/", icon: AiOutlineUser,description:"Datos" },
    { name: "Bienes", link: "/", icon: FiMessageSquare,description:"Maquinas, elementos, mobiliario" },
    { name: "Staff", link: "/", icon: TbReportAnalytics,description:"Profesores, encargados, personal" },
    { name: "Clientes", link: "/", icon: FiFolder,description:"Datos clientes" },
    { name: "Proveedores", link: "/", icon: FiShoppingCart,description:"Datos y pedidos" },
    { name: "Horarios", link: "/", icon: MdOutlineBrowseGallery,description:"Horarios semanales" },
    { name: "Reservas", link: "/", icon: MdOutlineCalendarMonth,description:"Reservas del día" },
    { name: "Gastos", link: "/", icon: MdOutlineCurrencyExchange,description:"Ingresos, egresos, gastos fijos" },
  ];
  
  const filteredMenus = menus.filter((menu) => menu.name !== "Home");

  return (
    <>
      <div className="flex flex-col h-screen home">
        <Navbar />

        <div className="flex-1 flex">
          <Sidebar menus={menus} />

          <div className="flex-1 m-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 ">

              {filteredMenus.map((menu) => (
                <div key={menu.name}  className="card card-side bg-base-100 shadow-xl">
                  
                  <div className="card-body">
                    <h2 className="card-title">{menu.name}</h2>
                    <p>{menu.description}</p>
   
                  </div>
                </div>
              ))}

            </div>
          </div>
          
        </div>

        <Footer />
      </div>
    </>
  );
};

import {
  
  MdOutlineBrowseGallery,
  MdOutlineCalendarMonth,
  MdOutlineCurrencyExchange,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

export const menus = [
  { name: "Perfil administrador", link: "/admin", icon: AiOutlineUser,description:"Datos" },
  { name: "Bienes", link: "/admin/bienes", icon: FiMessageSquare,description:"Maquinas, elementos, mobiliario" },
  { name: "Staff", link: "/admin/staff", icon: TbReportAnalytics,description:"Profesores, encargados, personal" },
  { name: "Clientes", link: "/admin/clientes", icon: FiFolder,description:"Datos clientes" },
  { name: "Proveedores", link: "/admin/proovedores", icon: FiShoppingCart,description:"Datos y pedidos" },
  { name: "Horarios", link: "/admin/horarios", icon: MdOutlineBrowseGallery,description:"Horarios semanales" },
  { name: "Reservas", link: "/admin/reservas", icon: MdOutlineCalendarMonth,description:"Reservas del día" },
  { name: "Gastos", link: "/admin/gastos", icon: MdOutlineCurrencyExchange,description:"Ingresos, egresos, gastos fijos" },
];

import { createElement, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import PropTypes from "prop-types";

const Sidebar = ({menus}) => {
  const [open, setOpen] = useState(true);

  
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#343A40] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu,i) => (
            <a
              to={menu.link}
              key={menu.name}
              className={` ${
                menu?.margin && "mt-1"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit z-10  `}
              >
                {menu?.name}
              </h2>
            </a>
          ))}
        </div>
      </div>
              
    </section>
  );

  
};

Sidebar.propTypes = {
    menus: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
      })
    ).isRequired,
  };

export default Sidebar;
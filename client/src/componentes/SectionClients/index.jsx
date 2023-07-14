import React, { useState } from "react";
import Table from "../Table";
import { ToastContainer, toast } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import Logo from "./FitnessCenterLogoGym.png";

const IndexTable = () => {
  const title = "Clientes";
  const type = "clientes";
  const tableHeader = [
    "Nombre completo",
    "Plan",
    "Celular",
    "Mail",
    "Inicio",
    "Vencimiento",
  ];
  const tableBody = [
    {
      id: 1,
      nombre: "Kristin Watson",
      plan: "full",
      celular: "123456789",
      mail: "kristin@mail.com",
      inicio: "Text",
      vencimiento: "08/08/2023",
    },
    {
      id: 2,
      nombre: "Floyd Miles",
      plan: "free pass",
      celular: "456789123",
      mail: "floyd@mail.com",
      inicio: "Text",
      vencimiento: "08/08/2023",
    },
    {
      id: 3,
      nombre: "Brooklyn Simmons",
      plan: "2 weeks",
      celular: "789123456",
      mail: "brooklyn@mail.com",
      inicio: "Text",
      vencimiento: "08/08/2023",
    },
  ];

  const [tBody, setTBody] = useState(tableBody);
  return (
    <div className="flex flex-col justify-center gap-10 w-full">
      <ToastContainer autoClose={1000} />
      <div className="flex flex-col mb-10">
        <div className="flex justify-center">
          <div className="md:w-36 w-32">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <SectionTitle title={title} />
      </div>
      <div className="flex flex-col gap-10 mx-5">
        <Table
          tHeader={tableHeader}
          tBody={tBody}
          setTBody={setTBody}
          type={type}
        />
        <ButtonAdd
          tBody={tBody}
          setTBody={setTBody}
          tHeader={tableHeader}
          type={type}
        />
      </div>
    </div>
  );
};

export default IndexTable;

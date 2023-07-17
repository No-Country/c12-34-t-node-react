import React, { useState } from "react";
import Table from "../Table";
import { ToastContainer, toast } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import Logo from "./FitnessCenterLogoGym.png";
import { useEffect } from "react";
import axios from "axios";

const IndexTable = () => {
  const title = "Proveedores";
  const type = "proveedores";

  const tableHeader = [
    "Nombre Completo",
    "Producto",
    "Celular",
    "Mail",
    "Fecha",
    "Descripción",
    "Empresa",
  ];
  const tableBody = [
    {
      id: 1,
      name: "Cristina Watson",
      product: "Agua",
      contact: 123456789,
      mail: "text",
      date: "text",
      description: "text",
      provider: "text",
    },
    {
      id: 2,
      name: "Cristina Watson",
      product: "Agua",
      contact: 123456789,
      mail: "text",
      date: "text",
      description: "text",
      provider: "text",
    },
    {
      id: 3,
      name: "Cristina Watson",
      product: "Agua",
      contact: 123456789,
      mail: "text",
      date: "text",
      description: "text",
      provider: "text",
    },
  ];
  const [tBody, setTBody] = useState(tableBody);

  // useEffect(() => {
  //   axios.get("")
  //     .then(res=>setTBody(res))
  //     .catch(err=>console.log(err))
  // }, [tBody])

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

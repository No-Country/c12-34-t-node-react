import React, { useState } from "react";
import Table from "../Table";
import { ToastContainer, toast } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import Logo from "./FitnessCenterLogoGym.png";
import { useEffect } from "react";
import { axiosGetProviders } from "../../hooks/axiosProvider";

const IndexTable = () => {
  const title = "Proveedores";
  const type = "provider";

  const tableHeader = [
    "Nombre Completo",
    "Producto",
    "Celular",
    "Email",
    // "Fecha",
    "Descripción",
    "Empresa",
  ];
  const [tBody, setTBody] = useState([]);
  const [error, setTError] = useState("");

  useEffect(() => {
    axiosGetProviders(setTBody, setTError)
  }, [])

  return (
    <div className="flex flex-col justify-center gap-10 w-full">
      <ToastContainer autoClose={1000} />
      <SectionTitle title={title} />
      <div className="flex flex-col gap-10 mx-5">
        <Table
          tHeader={tableHeader}
          tBody={tBody}
          setTBody={setTBody}
          type={type}
          error={error}
          setTError={setTError}
        />
        <ButtonAdd
          tBody={tBody}
          setTBody={setTBody}
          tHeader={tableHeader}
          type={type}
          setTError={setTError}
        />
      </div>
    </div>
  );
};

export default IndexTable;

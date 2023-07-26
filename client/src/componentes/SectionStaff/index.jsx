import React, { useState } from "react";
import Table from "../Table";
import { ToastContainer, toast } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import Logo from "./FitnessCenterLogoGym.png";
import { useEffect } from "react";
import { axiosGet } from "../../hooks/axiosGeneral";

const IndexTable = () => {
  const title = "Staff";
  const type = "employee";
  const tableHeader = ["Nombre completo", "Ocupación", "Celular", "Email"];
  const [tBody, setTBody] = useState([]);
  const [error, setTError] = useState("");

  useEffect(() => {
    axiosGet(setTBody, setTError, "employees");
  }, []);

  return (
    <div className="flex flex-col  gap-10 w-full">
      <ToastContainer autoClose={1000} />
      <SectionTitle title={title} />
      <div className="w-[80vw] flex flex-col gap-10 mt-5 mx-auto">
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

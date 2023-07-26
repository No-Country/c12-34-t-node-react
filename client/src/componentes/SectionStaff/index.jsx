import React, { useState } from "react";
import Table from "../Table";
import { ToastContainer } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import { useEffect } from "react";
import { axiosGet } from "../../hooks/axiosGeneral";

const IndexTable = () => {
  const title = "Staff";
  const type = "employee";
  
  const tableHeader = [
    "Nombre completo",
    "Email",
    "Celular",
    "Ocupación",
  ];

  const [tBody, setTBody] = useState([]);
  const [error, setTError] = useState("");

  useEffect(() => {
    axiosGet(setTBody, setTError, "employees")
  }, []);

  // useEffect(() => {
  //   axiosGet(setTBody, setTError, "employees")
  // }, [tBody]);

  return (
    <div className="flex flex-col  gap-10 w-full">
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

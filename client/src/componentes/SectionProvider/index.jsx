import React, { useState } from "react";
import Table from "../Table";
import { ToastContainer, toast } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import Logo from "./FitnessCenterLogoGym.png";
import axios from "axios";
import { useEffect } from "react";
const { VITE_BACKEND_URL } = import.meta.env;




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


  const getProviders = () => {
    axios.get(`${VITE_BACKEND_URL}/api/providers`)
      // fetch(`http://localhost:3001/api/providers`)
      .then(resul => {
        console.log(resul.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {

    getProviders();

  }, []);



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

import React, { useState } from "react";
import Table from "../Table";
import { ToastContainer } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import { useEffect } from "react";
import axios from "axios";
import ModalClientes from "./ModalClientes";

const IndexTable = () => {

   const [name, setName] = useState("")
   const [plan, setPlan] = useState("")
   const [contact, setContact] = useState("")
   const [email, setEmail] = useState("")
   const [dateIn, setDateIn] = useState("")
   const [dateOut, setDateOut] = useState("")
   const [showTable, setShowTable] = useState(true)


  const title = "Clientes";
  const type = "clients";
  const tableHeader = [
    "Nombre completo",
    "Plan",
    "Celular",
    "Email",
    "Inicio",
    "Vencimiento",
  ];

  const [tBody, setTBody] = useState([]);

  const [error, setTError] = useState("");


  const getUser = () => {
    axios.get(`/api/clients`)
    .then(info => {
        // console.log(info.data);
        const { data } = info;
        setTBody(data)
      })
      .catch(err => {
        console.log(err.response.data.error)
        setTError(err.response.data.error)
      });
  };

  useEffect(() => { 
     getUser()
  }, [])
  
  const resetClients = (newClient) => { 
    setTBody((prev) => [...prev, newClient]);
  }
  
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
        />

        <ModalClientes reset={resetClients}/>
      </div>
    </div>
  );
};

export default IndexTable;

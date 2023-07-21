import React, { useState } from "react";
import Table from "../Table";
import { ToastContainer, toast } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import Logo from "./FitnessCenterLogoGym.png";
import { useEffect } from "react";
import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env;

const IndexTable = () => {
  const title = "Clientes";
  const type = "clientes";
  const BODY_DATA = "BODY_DATA";
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

  const [tBody, setTBody] = useState([]);

  const [error, setTError] = useState("");


  const getUser = () => {
    axios.get(`${VITE_BACKEND_URL}/api/clients`)
      .then(info => {
        console.log(info.data);
        const { data } = info;
        setTBody(data)
      })
      .catch(err => {
        console.log(err.response.data.error)
        setTError(err.response.data.error)
      });
  };

  useEffect(() => {
    // console.log("LOCAL:", window.localStorage.getItem(BODY_DATA))
    // const local = window.localStorage.getItem(BODY_DATA)
    // if (local.length < 1 || local === null) {
    // }
    getUser();
  }, []);
  
  useEffect(() => {
    const data = window.localStorage.getItem(BODY_DATA);
    setTBody(JSON.parse(data));
    // console.log("GET:", JSON.parse(data))
  }, []);
  
  useEffect(() => {
    window.localStorage.setItem(BODY_DATA, JSON.stringify(tBody));
    // console.log("SET:", tBody)
  }, [tBody]);

  return (
    <div className="flex flex-col justify-center gap-10 w-full">
      <ToastContainer autoClose={1000} />
      <SectionTitle title={title} />
      <div className="flex flex-col gap-10 mx-5">
        
        {/* {clients.map((c) => { 
           <Table />
        })} */}

         <Table
          tHeader={tableHeader}
          tBody={tBody}
          setTBody={setTBody}
          type={type}
          error={error}
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

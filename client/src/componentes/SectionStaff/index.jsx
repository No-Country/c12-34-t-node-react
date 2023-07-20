import React, { useState } from "react";
import Table from "../Table";
import { ToastContainer, toast } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import Logo from "./FitnessCenterLogoGym.png";
import { useEffect } from "react";
import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env

const IndexTable = () => {
  const title = "Staff";
  const type = "clientes";
  const tableHeader = [
    "Nombre completo",
    "Ocupación",
    "Celular",
    "Mail",
    "Inicio",
    "Horarios",
  ];
  const tableBody = [
    {
      id: 1,
      nombre: "Kristin Watson",
      plan: "full",
      celular: "123456789",
      mail: "kristin@mail.com",
      inicio: "Text",
      horario: "8am - 12am",
    },
    {
      id: 2,
      nombre: "Floyd Miles",
      plan: "free pass",
      celular: "456789123",
      mail: "floyd@mail.com",
      inicio: "Text",
      horario: "12am - 16pm",
    },
    {
      id: 3,
      nombre: "Brooklyn Simmons",
      plan: "2 weeks",
      celular: "789123456",
      mail: "brooklyn@mail.com",
      inicio: "Text",
      horario: "16pm - 20pm",
    },
  ];

  const [tBody, setTBody] = useState(tableBody);

  const getUser = () => {
    axios(`${VITE_BACKEND_URL}/api/all-users`)
      .then(info => {
        console.log(info.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUser()
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

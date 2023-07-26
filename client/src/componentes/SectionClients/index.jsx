import React, { useState } from "react";
import Table from "../Table";
import { ToastContainer, toast } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import Logo from "./FitnessCenterLogoGym.png";
import { useEffect } from "react";
import axios from "axios";
import ModalClientes from "./ModalClientes";

const IndexTable = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("");
  const [contact, setContact] = useState("");
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [showTable, setShowTable] = useState(true);

  const title = "Clientes";
  const type = "clients";
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
    axios
      .get(`/api/clients`)
      .then((info) => {
        console.log(info.data);
        const { data } = info;
        setTBody(data);
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setTError(err.response.data.error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const resetClients = (newClient) => {
    setTBody((prev) => [...prev, newClient]);
  };

  const createNewClient = () => {
    const newClient = {
      name: name,
      email: email,
      contact: contact,
      plan: plan,
      dateIn: dateIn,
      dateOut: dateOut,
    };

    setTimeout(() => {
      axios
        .post(`/api/client`, newClient)
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }, 500);
  };

  return (
    <div className="flex flex-col w-full gap-2 m-2 sm:m-5">
      <ToastContainer autoClose={1000} />
      <SectionTitle title={title} />
      <div className="w-[80vw] flex flex-col gap-10 mt-5 mx-auto">
        <Table
          tHeader={tableHeader}
          tBody={tBody}
          setTBody={setTBody}
          type={type}
          error={error}
        />

        <ModalClientes reset={resetClients} />

        {/* <button className="btn" onClick={()=>window.my_modal_1.showModal()}>open modal</button>
          <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}></input>
          <input type="text" placeholder="contact" onChange={(e) => setContact(e.target.value)}></input>
          <input type="text" placeholder="plan" onChange={(e) => setPlan(e.target.value)}></input>
          <input type="date" placeholder="dateIn" onChange={(e) => setDateIn(e.target.value)}></input>
          <input type="date" placeholder="dateOut" onChange={(e) => setDateOut(e.target.value)}></input>
          <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
          <button className="btn">Close</button>
         <button onClick={() => createNewClient()}> Enviar cliente nuevo</button>
  </form>
</dialog>*/}
      </div>
    </div>
  );
};

export default IndexTable;

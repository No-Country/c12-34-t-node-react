import React, { useState } from "react";
import Table from "../Table";
import { ToastContainer } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import { useEffect } from "react";
import axios from "axios";

const IndexTable = () => {

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [plan, setPlan] = useState("")
   const [contact, setContact] = useState("")
   const [dateIn, setDateIn] = useState("")
   const [dateOut, setDateOut] = useState("")


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

  const createNewClient = () => { 
    
    const newClient = ({ 
      name: name, 
      email: email,
      contact: contact,
      plan: plan,
      dateIn: dateIn,
      dateOut: dateOut
    })

    setTimeout(() => {
      axios.post(`/api/client`, newClient)
      .then((res) => {
        console.log(res.data)
        window.location.reload()
      })
      .catch(err => console.log(err)) 
    }, 500)
  }

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
        />
        
        <button className="btn" onClick={()=>window.my_modal_1.showModal()}>open modal</button>
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
</dialog>
      </div>
    </div>
  );
};

export default IndexTable;

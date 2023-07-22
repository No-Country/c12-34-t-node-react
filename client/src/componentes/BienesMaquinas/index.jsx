import { useState } from "react";
import Table from "../Table";
import { ToastContainer, toast } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";

import { useEffect } from "react";
import axios from "axios";
import { axiosGetElement } from "../../hooks/axiosElement";

 const BienesMaquinas = () => {
  const title = "Bienes / Máquinas";
  const type = "bienesMaquinas";

  const tableHeader = [
    "Maquina",
    "Estado",
    "Descripcion",
    "Stock",
    "Valor actual",
    "Fecha",
    
  ];
  const tableBody = [

    {
      id: 1,
      name: "Polea",
      estado: "nueva",
      manetenimiento: "text",
      respuestos: "text",
      valorActual: "text",
      fecha: "text",
      
    },
   
  ];
  // const [tBody, setTBody] = useState(tableBody);
  const [tBody, setTBody] = useState([]);
  const [error, setTError] = useState("");
    
  axiosGetElement(setTBody, setTError)
  useEffect(() => {
    axiosGetElement(setTBody, setTError)
  }, []);

  return (
    <div className="flex flex-col justify-center gap-10 w-full">
      <ToastContainer autoClose={1000} />
      <div className="flex flex-col mb-10">
        <div className="flex justify-center">
          <div className="md:w-36 w-32">
            
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
          error={error}
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
}
export default BienesMaquinas
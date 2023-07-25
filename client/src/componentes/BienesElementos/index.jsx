import { useState } from "react";
import Table from "../Table";
import { ToastContainer, toast } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import { useEffect } from "react";
import { axiosGet } from "../../hooks/axiosGeneral";

const BienesElementos = () => {
    const title = "Bienes / Elementos";
    const type = "element-client";
  
    const tableHeader = [
      "Elemento",
      "Estado",
      "Descripcion",
      "Stock",
      "Precio",
      "Fecha",
    ];
    const [tBody, setTBody] = useState([]);
    const [error, setTError] = useState("");

    useEffect(() => {
      axiosGet(setTBody, setTError, "elements")
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
}

export default BienesElementos
import { useState } from "react";
import Table from "../Table";
import { ToastContainer, toast } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import { useEffect } from "react";
import axios from "axios";
import { axiosGetElement } from "../../hooks/axiosElement";
const { VITE_BACKEND_URL } = import.meta.env;

const BienesElementos = () => {
    const title = "Bienes / Elementos";
    const type = "bienesElementos";
  
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
  
    // const getElements = () => {
    //   axios.get(`${VITE_BACKEND_URL}/api/elements`)
    //     .then(info => {
    //       // console.log("BIENES-ELEMENTS:", info.data);
    //       const { data } = info;
    //       setTBody(data)
    //     })
    //     .catch(err => {
    //       console.log(err.response.data.error)
    //       setTError(err.response.data.error)
    //     });
    // };
    
    axiosGetElement(setTBody, setTError)
    useEffect(() => {
      axiosGetElement(setTBody, setTError)
      // axiosGetElement()
      // getElements();
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

export default BienesElementos
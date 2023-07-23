import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../store/userContext";
import { axiosGetElement, axiosPostElement } from "../../hooks/axiosElement";
import { axiosPostProvider } from "../../hooks/axiosProvider";

const ButtonAdd = ({ tBody, setTBody, tHeader, type, setTError }) => {
  const { userId } = useContext(UserContext)
  // console.log("USER ID:", userId)
  
  const [inputField, setInputField] = useState([]);
  const addElement = () => {
    const notNull = inputField.filter((x) => x);

    if (notNull.length < tHeader.length) {
      return toast.error("Debes llenar todos los campos");
    }
    let newId;
    if (tBody.length < 1) {
      newId = 1;
    } else {
      newId = tBody[tBody.length - 1].id + 1;
    }
    let newElement;
    /* -------------------------------------------------------------------------- */
    /*                              Definiendo tipos                              */
    /* -------------------------------------------------------------------------- */
    if (type === "clientes") {
      newElement = 
        {
          id: newId,
          nombre: inputField[0],
          plan: inputField[1],
          celular: inputField[2],
          mail: inputField[3],
          inicio: inputField[4],
          vencimiento: inputField[5],
        }
    } else if (type === "provider") {
      newElement = {
          // id: newId,
          name: inputField[0],
          product: inputField[1],
          contact: inputField[2],
          email: inputField[3],
          // date: inputField[4],
          description: inputField[4],
          provider: inputField[5],
          adminId: userId,
      }
      axiosPostProvider(newElement);
    } else if (type === "elements") {
      newElement = {
          // id: newId,
          name: inputField[0],
          state: inputField[1],
          description: inputField[2],
          type: inputField[3],// Stock
          price: inputField[4],
          date: inputField[5],
          providerId: "ecabfd84-251c-4394-8fc0-43a335aac5d1",
          adminId: userId,
      }
      axiosPostElement(newElement)
    } 
    setInputField([]);
    toast.success("Nuevo elemento agregado");
  };
  function handleChange(i, e) {
    let event = e.target.value;
    const values = [...inputField];
    const number = /[0-9]/
    if (i === 5) {
      if (!event.match(number)) {
        event
      } else {
        if (event.length === 2 && event.match(number)) {
          event = event + "-";
        }
        if (event.length === 5 && event.match(number)) {
          event = event + "-";
        }
      }
    }
    values[i] = event;
    setInputField(values);
    // console.log(values)// Se vizualizan los input
  }
  return (
    <div className="flex justify-center">
      {/* The button to open modal */}
      <label
        htmlFor="my_modal_add"
        className="btn text-white px-10 bg-[#1A1363] hover:bg-black"
      >
        Agregar
      </label>

      <input type="checkbox" id="my_modal_add" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Agregar</h3>
          <div className="grid gap-2">
            {tBody &&
              tHeader.map((item, i) => {
                // console.log("BUTTON-ADD:", tBody, "INDEX:", i)
                // if (i < 6) {
                return (
                  <div key={i}>
                    <label className="block" htmlFor={`input-${i}`}>
                      {item}
                    </label>
                    <input
                      id={`input-${i}`}
                      value={inputField[i] || ""}
                      onChange={(e) => handleChange(i, e)}
                      // type={i >= 5 ? "date" : "text"}
                      type={"text"}
                      className="input input-bordered w-full"
                    />
                  </div>
                );
                // }
              })}
          </div>
          <div className="modal-action">
            <label
              onClick={addElement}
              className="btn text-white px-10 bg-[#1A1363] hover:bg-black"
              htmlFor="my_modal_add"
            >
              Guardar
            </label>
            <label
              htmlFor="my_modal_add"
              className="btn border-[#1A1363] btn-outline px-10 hover:bg-black"
            >
              Cancelar
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonAdd;

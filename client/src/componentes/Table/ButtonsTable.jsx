// import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import { axiosDeleteElement, axiosGetElement, axiosPutElement } from "../../hooks/axiosElement";
const { VITE_BACKEND_URL } = import.meta.env;

function ButtonsTable({ id, tBody, setTBody, type, setTError }) {
  const [inputFields, setInputFields] = useState([]);
  const editItem = (_id) => {
    let edited = [];
    const itemBody = tBody.find((item) => item.id === _id);
    let itemBody2 = [];

    Object.values(itemBody).map((value) => itemBody2.push(value));

    for (let i = 0; i <= itemBody2.length; i++) {
      if (i >= 1) {
        if (inputFields[i] !== null && inputFields[i] !== undefined) {
          edited[i] = inputFields[i];
        } else {
          edited[i] = itemBody2[i];
        }
      }
    }

    const newState = tBody.map((item) => {
      if (item.id === id) {
        if (type === "clientes") {
          return {
            ...item,
            nombre: edited[1],
            plan: edited[2],
            celular: edited[3],
            mail: edited[4],
            inicio: edited[5],
            vencimiento: edited[6],
          };
        }
        if (type === "proveedores") {
          return {
            ...item,
            name: edited[1],
            product: edited[2],
            contact: edited[3],
            mail: edited[4],
            date: edited[5],
            description: edited[6],
            provider: edited[7],
          };
        }
        if (type === "bienesElementos") {
          return {
            // ...item,
            name: edited[1],
            state: edited[2],
            description: edited[6],
            type: edited[3],// Stock
            price: edited[4],
            date: edited[5],
          };
        }
      }
      return item;
    });
    axiosPutElement(newState, _id);
    axiosGetElement(setTBody, setTError);

    setTBody(tBody);

    toast.success(`Elemento ${id} editado`);
    setInputFields([]);
  };
  // const deleteItem = () => {
  //   const newBody = tBody.filter((item) => item.id !== id);
  //   axios.delete(`${VITE_BACKEND_URL}/api/elements/${id}`)
  //     .then(res => {
  //       console.log("BUTTON delete:", res.data);
  //     })
  //     .catch(err => {
  //       console.log(err.response.data.error);
  //     });
  //   setTBody(newBody);
  //   toast.success(`Elemento ${id} eliminado`);
  // };
  function handleChange(i, e) {
    let event = e.target.value;
    const values = [...inputFields];
    if (i === 6) {
      if (event.length === 2) {
        event = event + "-";
      }
      if (event.length === 5) {
        event = event + "-";
      }
    }
    values[i] = event;
    setInputFields(values);
  }
  return (
    <td className="flex justify-start gap-4">
      {/* The button to open modal */}
      <label
        htmlFor={`my_modal_${id}`}
        className="cursor-pointer hover:scale-125 transition-all"
      >
        <BiEditAlt />
      </label>
      <input type="checkbox" id={`my_modal_${id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {/* Content */}
          <h3 className="font-bold text-lg text-center mb-2">
            Editar elemento
          </h3>

          {tBody.length >= 1 &&
            tBody.map((data, i) => {
              return (
                <div key={i} className="grid gap-2">
                  {Object.values(data).map((item, subI) => {
                    // if (tBody[i].id === id && subI !== 0) {
                    // if (tBody[i].id === id && subI !== 0 && subI !== 7 && subI !== 8 && subI !== 9) {
                    if (tBody[i].id === id && subI !== 0 && subI !== 7 && subI !== 8 && subI !== 9) {
                      // No ver IDs: && subI !== 0
                      return (
                        <input
                          id={`input_${subI}`}
                          key={subI}
                          type="text"
                          // type={subI >= 6 ? "date" : "text"}
                          maxLength={subI >= 6 ? 10 : 100}
                          placeholder={item}
                          value={inputFields[subI] || ""}
                          className="input input-bordered"
                          onChange={(e) => handleChange(subI, e)}
                        />
                      );
                    }
                  })}
                </div>
              );
            })}

          <div className="modal-action">
            <button
              //   type="submit"
              onClick={() => editItem(id)}
            >
              <label
                className="btn text-white px-10 bg-[#1A1363] hover:bg-black"
                htmlFor={`my_modal_${id}`}
              >
                Guardar
              </label>
            </button>
            <label
              htmlFor={`my_modal_${id}`}
              className="btn border-[#1A1363] btn-outline px-10 hover:bg-black"
            >
              Cancelar
            </label>
          </div>
        </div>
      </div>

      <button onClick={() => axiosDeleteElement(id)} className="hover:scale-125 transition-all">
        <RiDeleteBin5Line />
      </button>
    </td>
  );
}

export default ButtonsTable;

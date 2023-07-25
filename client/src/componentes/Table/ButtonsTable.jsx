// import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { axiosDeleteElement, axiosGetElement, axiosPutElement } from "../../hooks/axiosElement";
import { axiosDeleteProvider, axiosGetProviders } from "../../hooks/axiosProvider";
import {axiosGet, axiosDelete} from "../../hooks/axiosGeneral"

function ButtonsTable({ id, tBody, setTBody, type, setTError }) {
  const [inputFields, setInputFields] = useState([])


  const editItem = (_id) => {
    // axios.put(`${VITE_BACKEND_URL}/api/client/${_id}`, inputFields)
    axios.put(`/api/client/${_id}`, inputFields)
      .then((res) => console.log(res.data))
      .catch(err => console.log(err))

    let edited = []
    const itemBody = tBody.find((item) => item.id === _id)
    let itemBody2 = []

    Object.values(itemBody).map((value) => itemBody2.push(value))

    for (let i = 0;i <= itemBody2.length;i++) {
      if (i >= 1) {
        if (inputFields[i] !== null && inputFields[i] !== undefined) {
          edited[i] = inputFields[i]
        } else {
          edited[i] = itemBody2[i]
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
          }
        }
        if (type === "provider") {
          return {
            // ...item,
            name: edited[1],
            product: edited[2],
            contact: edited[3],
            email: edited[4],
            // date: edited[5],
            description: edited[5],
            provider: edited[6],
          };
        }
        if (type === "elements") {
          return {
            // ...item,
            name: edited[1],
            state: edited[2],
            description: edited[6],
            type: edited[3],// Stock
            price: edited[4],
            date: edited[5],
          }
        }
      }
      return item
    })
    axiosPutElement(newState, _id)

    setTBody(tBody)

    toast.success(`Elemento ${id} editado`);
    setInputFields([]);
  };
  const handleDelete = async (id, type) => {
    if (type === "provider") {
      await axiosDelete(id, "provider");
      await axiosGet(setTBody, setTError,"providers");
    }
    if (type === "employee") {
      await axiosDelete(id, "employee");
      await axiosGet(setTBody, setTError,"employees");
    }
    if (type === "element-client") {
      await axiosDelete(id, "elements");
      await axiosGet(setTBody, setTError, "elements");
    }
    if(type === "clients"){
      await axiosDelete(id, "client");
      await axiosGet(setTBody, setTError, "clients");
    }
  }
  function handleChange(i, e) {
    let event = e.target.value
    const values = [...inputFields]
    const number = /[0-9]/
    if (i === 6) {
      if (!event.match(number)) {
        event
      } else {
        if (event.length === 2 && event.match(number)) {
          event = event + "-"
        }
        if (event.length === 5 && event.match(number)) {
          event = event + "-"
        }
      }
    }
    values[i] = event
    setInputFields(values)
  }
  const deleteItem = () => {
    const newBody = tBody.filter((item) => item.id !== id)
    setTBody(newBody)
    toast.success(`Elemento ${id} eliminado`)
  }
  function handleChange(i, event) {
    const values = [...inputFields]
    values[i] = event.target.value
    setInputFields(values)
  }

  return (
    <td className="grow flex flex-nowrap my-2 items-center gap-3 px-1 ">
      {/* The button to open modal */}
      <label htmlFor={`my_modal_${id}`} className=' shrink-0'>
        {/* <img src={editIcon} alt="Imagen de Lápiz que quiere indicar, editar la fila" className=' btn p-0.5 bg-pallete-white hover:bg-pallete-green' /> */}
      </label>
      <input type="checkbox" id={`my_modal_${id}`} className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          {/* Content */}
          <h3 className=" font-PoppinsBold text-lg text-center mb-2">
            Editar elemento
          </h3>

          {tBody.length >= 1 &&
            tBody.map((data, i) => {
              return (
                <div key={i} className="grid gap-4">
                  {Object.values(data).map((item, subI) => {
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
                          className="input input-sm input-bordered placeholder:font-PoppinsRegular font-PoppinsRegular"
                          onChange={(e) => handleChange(subI, e)}
                        />
                      )
                    }
                  })}
                </div>
              )
            })}

          <div className="modal-action">
            <label
              htmlFor={`my_modal_${id}`}
              className="btn btn-sm px-10 shadow-sm font-PoppinsSemibold text-pallete-grey bg-inherit border-pallete-grey hover:shadow-xl hover:bg-inherit "
            >
              Cancelar
            </label>
            <button
              //   type="submit"
              onClick={() => editItem(id)}
            >
              <label
                className="btn btn-sm px-10 rounded-xl flex justify-center items-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow hover:border-amber-400 leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue"
                htmlFor={`my_modal_${id}`}
              >
                Guardar
              </label>
            </button>
          </div>
        </div>
      </div>

      <button onClick={() => handleDelete(id, type)} className="hover:scale-125 transition-all">
        <RiDeleteBin5Line />
      </button>
    </td>
  )
}

export default ButtonsTable

// import React from "react";
// import { RiDeleteBin5Line } from "react-icons/ri"
// import { BiEditAlt } from "react-icons/bi"
import trashIcon from "./assets/trashIcon.png"
import editIcon from "./assets/pencilIcon.png"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react"

function ButtonsTable({ id, tBody, setTBody, type }) {
  const [inputFields, setInputFields] = useState([])
  const editItem = (_id) => {
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
          }
        }
      }
      return item
    })

    setTBody(newState)

    toast.success(`Elemento ${id} editado`)
    setInputFields([])
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
        <img src={editIcon} alt="Imagen de Lápiz que quiere indicar, editar la fila" className=' btn p-0.5 bg-pallete-white hover:bg-pallete-green' />
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
                    if (tBody[i].id === id) {
                      // No ver IDs: && subI !== 0
                      return (
                        <input
                          id={`input_${subI}`}
                          key={subI}
                          type="text"
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

      <button onClick={deleteItem} >
        <img src={trashIcon} alt="trashIcon" className='btn p-0.5 bg-pallete-white hover:bg-pallete-yellow' />
      </button>
    </td>
  )
}

export default ButtonsTable

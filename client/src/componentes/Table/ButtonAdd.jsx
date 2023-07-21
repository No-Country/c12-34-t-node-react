import React, { useState } from "react"
import { toast } from "react-toastify"

const ButtonAdd = ({ tBody, setTBody, tHeader, type }) => {
  const [inputField, setInputField] = useState([])
  const addElement = () => {
    const notNull = inputField.filter((x) => x)

    if (notNull.length < tHeader.length) {
      return toast.error("Debes llenar todos los campos")
    }
    let newId
    if (tBody.length < 1) {
      newId = 1
    } else {
      newId = tBody[tBody.length - 1].id + 1
    }
    let newElement
    /* -------------------------------------------------------------------------- */
    /*                              Definiendo tipos                              */
    /* -------------------------------------------------------------------------- */
    if (type === "clientes") {
      newElement = [
        {
          id: newId,
          nombre: inputField[0],
          plan: inputField[1],
          celular: inputField[2],
          mail: inputField[3],
          inicio: inputField[4],
          vencimiento: inputField[5],
        },
      ]
    } else if (type === "proveedores") {
      newElement = [
        {
          id: newId,
          name: inputField[0],
          product: inputField[1],
          contact: inputField[2],
          mail: inputField[3],
          date: inputField[4],
          description: inputField[5],
          provider: inputField[6],
        },
      ]
    }

    setTBody((items) => [...items, ...newElement])
    // console.log(tBody);
    setInputField([])
    toast.success("Nuevo elemento agregado")
  }
  function handleChange(i, e) {
    const values = [...inputField]
    values[i] = e.target.value
    setInputField(values)
  }
  return (
    <div className="flex justify-center">
      {/* The button to open modal */}
      <label
        htmlFor="my_modal_add"
        className="btn btn-md px-10 py-1.5 mx-auto rounded-xl flex justify-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow  leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue"
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
                      type="text"
                      className="input input-bordered w-full"
                    />
                  </div>
                )
                // }
              })}
          </div>
          <div className="modal-action">
            <label
              onClick={addElement}
              className="btn text-pallete-white px-10 bg-pallete-blue hover:bg-pallete-black"
              htmlFor="my_modal_add"
            >
              Guardar
            </label>
            <label
              htmlFor="my_modal_add"
              className="btn border-pallete-blue btn-outline px-10 hover:bg-pallete-black"
            >
              Cancelar
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonAdd

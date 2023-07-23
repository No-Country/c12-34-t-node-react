import React, { useState, useContext, useEffect } from "react"
import { toast } from "react-toastify"
import { UserContext } from "../../store/userContext"
import { axiosGetElement, axiosPostElement } from "../../hooks/axiosElement"

const ButtonAdd = ({ tBody, setTBody, tHeader, type, setTError }) => {
  const { userId } = useContext(UserContext)
  // console.log("USER ID:", userId)

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
    } else if (type === "bienesElementos") {
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
      // axiosGetElement(setTBody, setTError);
      // useEffect(() => {
      //   axiosGetElement(setTBody, setTError);
      // }, []);
    } else if (type === "bienesMaquinas") {
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
      axiosGetElement(setTBody, setTError)
    }
    setInputField([])
    toast.success("Nuevo elemento agregado")
  }
  function handleChange(i, e) {
    let event = e.target.value
    const values = [...inputField]
    if (i === 5) {
      if (event.length === 2) {
        event = event + "-"
      }
      if (event.length === 5) {
        event = event + "-"
      }
    }
    values[i] = event
    setInputField(values)
    // console.log(values)// Se visualizan los input
  }
  return (
    <div className="flex justify-center">
      {/* The button to open modal */}
      <label
        htmlFor="my_modal_add"
        className="btn btn-md px-10 py-1.5 mx-auto rounded-xl flex justify-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow hover:shadow-md leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue"
      >
        Agregar
      </label>

      <input type="checkbox" id="my_modal_add" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Agregar</h3>
          <div className="grid gap-4">
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
                      className="w-full input input-sm input-bordered placeholder:font-PoppinsRegular font-PoppinsRegular"
                    />
                  </div>
                )
                // }
              })}
          </div>
          <div className="modal-action">
            <label
              htmlFor="my_modal_add"
              className="btn btn-sm px-10 shadow-sm font-PoppinsSemibold text-pallete-grey bg-inherit border-pallete-grey hover:shadow-xl hover:bg-inherit "
            >
              Cancelar
            </label>
            <label
              onClick={addElement}
              className="btn btn-sm px-10 rounded-xl flex justify-center items-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow hover:border-amber-400 leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue"
              htmlFor="my_modal_add"
            >
              Guardar
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonAdd

import { useState } from "react"
import Table from "../Table"
import { ToastContainer, toast } from "react-toastify"
import ButtonAdd from "../Table/ButtonAdd"
import Title from "../Title"

import { useEffect } from "react"
import axios from "axios"

const BienesMaquinas = () => {
  const title = "Bienes / Máquinas"
  const type = "bienesMaquinas"

  const tableHeader = [
    "Maquina",
    "Estado",
    "Mantenimiento",
    "Respuestos",
    "Valor actual",
    "Fecha",

  ]
  const tableBody = [

    {
      id: 1,
      name: "Polea",
      estado: "nueva",
      mantenimiento: "Text",
      repuestos: "Text",
      valorActual: "1999",
      fecha: "Text",

    },
    {
      id: 2,
      name: "Press de Banca",
      estado: "Nueva",
      mantenimiento: "Text",
      repuestos: "Text",
      valorActual: "1999",
      fecha: "Text",

    },

  ]
  const [tBody, setTBody] = useState(tableBody)

  // useEffect(() => {
  //   axios.get("")
  //     .then(res=>setTBody(res))
  //     .catch(err=>console.log(err))
  // }, [tBody])

  return (
    <main className="flex flex-col w-full gap-2 m-5">
      <ToastContainer autoClose={1000} />
      <Title title={title} />
      <div className="w-[80vw] flex flex-col gap-10 mt-5 mx-auto">
        <Table
          tHeader={tableHeader}
          tBody={tBody}
          setTBody={setTBody}
          type={type}
        />
        <ButtonAdd
          tBody={tBody}
          setTBody={setTBody}
          tHeader={tableHeader}
          type={type}
        />
      </div>
    </main>
  )
}
export default BienesMaquinas
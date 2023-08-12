import React, { useState } from "react"
import { ToastContainer } from "react-toastify"
import Title from "../Title"
import { useEffect } from "react"
import { Table } from "./Table"
import { ButtonAdd } from "./ButtonAdd"
import { axiosGetEmployees } from "../../hooks/axiosEmployees"

const IndexTable = () => {

  const type = "employee"
  const tableHeader = ["Nombre completo", "Email", "Celular", "Ocupación"]

  const [tBody, setTBody] = useState([])
  const [error, setTError] = useState("")

  useEffect(() => {
    axiosGetEmployees(setTBody, setTError, "employees")
  }, []);

  return (
    <main className="flex flex-col w-full gap-2 px-auto py-2 sm:p-5">
      <ToastContainer autoClose={1000} />
      <Title title={"Staff"} />
      <section className="w-[80vw] flex flex-col gap-10 mt-5 mx-auto">
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
      </section>
    </main>
  )
}

export default IndexTable

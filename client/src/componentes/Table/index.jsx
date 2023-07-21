import React from "react"
import { AiOutlineUser } from "react-icons/ai"
import "react-toastify/dist/ReactToastify.css"
import ButtonsTable from "./ButtonsTable"

const Table = ({ tHeader, tBody, setTBody, type }) => {
  return (
    <>
      <div className="w-full overflow-x-scroll scroll-smooth h-56 rounded-lg">
        <table className="table table-pin-rows">
          <thead>
            <tr className=" bg-pallete-blue text-pallete-white">
              {tHeader && tHeader.map((item, i) => <th key={i}><p className=' font-PoppinsBold'>{item}</p></th>)}
              <th><p className=' font-PoppinsBold'>Acción</p></th>
            </tr>
          </thead>
          <tbody>
            {tBody.length >= 1 ? (
              tBody.map((data, i) => {
                return (
                  <tr key={i}>
                    {Object.values(data).map((item, subI) => {
                      if (subI !== 0)
                        return (
                          <td
                            key={subI}
                            className={`${subI === 2 && "badge badge-ghost"}`}
                          >
                            <div className="flex flex-row gap-2">
                              {subI === 1 && <AiOutlineUser />}
                              <p className=' font-PoppinsMedium'>{item}</p>
                            </div>
                          </td>
                        )
                    })}
                    <ButtonsTable
                      id={data.id}
                      tBody={tBody}
                      setTBody={setTBody}
                      type={type}
                    />
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={tHeader.length + 1} className="text-center">
                  No hay información
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table

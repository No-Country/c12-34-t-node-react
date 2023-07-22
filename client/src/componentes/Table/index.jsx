import "react-toastify/dist/ReactToastify.css"
import ButtonsTable from "./ButtonsTable"

const Table = ({ tHeader, tBody, setTBody, type }) => {
  return (
    <>
      <div className="w-full overflow-x-scroll scroll-smooth h-56 rounded-lg">
        <table className="table table-pin-rows">
          <thead>
            <tr className="grow bg-pallete-blue text-pallete-white">
              {tHeader && tHeader.map((item, i) => <th key={i}><p className=' text-start font-PoppinsMedium'>{item}</p></th>)}
              <th><p className=' pr-14 text-start font-PoppinsMedium'>Acción</p></th>
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
                          >
                            <div className="flex flex-row gap-2">
                              <p className={`${subI === 2 && "badge badge-ghost bg-pallete-black bg-opacity-25"} font-PoppinsRegular `}>{item}</p>
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
                  <p className=' text-lg font-PoppinsRegular text-pallete-grey'>No hay información</p>
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

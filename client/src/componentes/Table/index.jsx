import "react-toastify/dist/ReactToastify.css"
import ButtonsTable from "./ButtonsTable"

const Table = ({ tHeader, tBody, setTBody, type, error, setTError }) => {
  return (
    <>
      <div className="w-full overflow-x-scroll scroll-smooth h-full rounded-lg">
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
                // console.log("TABLE-DATA-0:", Object.values(data))
                return (
                  <tr key={i}>
                    {Object.values(data).map((item, subI) => {
                      // console.log("TABLE-ITEMS:", item, "INDEX:", subI)
                      if (subI !== 0 && subI !== 7 && subI !== 8 && subI !== 9)
                        return (
                          <td
                            key={subI}
                          >
                            <div className="flex flex-row gap-2">
                              <p className={`${subI === 1 && "badge badge-ghost bg-pallete-black bg-opacity-25"} font-PoppinsRegular whitespace-nowrap `}>{item}</p>
                            </div>
                          </td>
                        )
                    })}
                    <ButtonsTable
                      id={data.id}
                      tBody={tBody}
                      setTBody={setTBody}
                      type={type}
                      setTError={setTError}
                    />
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={tHeader.length + 1} className="text-center">
                  <p className=' text-lg font-PoppinsRegular text-pallete-grey'>{error}</p>
                </td >
              </tr >
            )}
          </tbody >
        </table >
      </div >
    </>
  )
}

export default Table

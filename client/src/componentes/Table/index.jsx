import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import ButtonsTable from "./ButtonsTable";

const Table = ({ tHeader, tBody, setTBody, type, error }) => {
  return (
    <>
      <div className="overflow-x-auto h-56">
        <table className="table table-pin-rows">
          <thead>
            <tr className="bg-[#1A1363] text-white">
              {tHeader && tHeader.map((item, i) => <th key={i}>{item}</th>)}
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {tBody.length >= 1 ? (
              tBody.map((data, i) => {
                // console.log("TABLE-DATA:", data) [{ELEMENTO}]
                console.log("TABLE-DATA-0:", Object.values(data))
                // console.log("TABLE-DATA-1:", data)
                // console.log("TABLE-DATA-2:", data[2])
                // console.log("TABLE-DATA-3:", data[3])
                // console.log("TABLE-DATA-4:", data[4])
                // console.log("TABLE-DATA-5:", data[5])
                return (
                  <tr key={i}>
                    {Object.values(data).map((item, subI) => {
                      console.log("TABLE-ITEMS:", item, "INDEX:", subI)
                      // console.log("TABLE-item:", item, "subI:", subI)
                      // console.log("TABLE-tBody:", tBody) [{ELEMENTO}]
                      if (subI !== 0 && subI!== 7 && subI !== 8 && subI !== 9)
                      // if (subI !== 0 && subI !== 7 && subI !== 8 && subI !== 8 && tBody[i].id === id && tBody[i].adminId === "adminId" && tBody[i].providerId === "providerId")
                      // if (subI !== 0 && subI !== 7 && subI !== 8 && subI !== 8)
                      // if (!Object.values(data)[0] && !Object.values(data)[7] && !Object.values(data)[8] && !Object.values(data)[9])
                        return (
                          <td
                            key={subI}
                            className={`${subI === 2 && "badge badge-ghost"}`}
                          >
                            <div className="flex flex-row gap-2">
                              {subI === 1 && <AiOutlineUser />}
                              {item}
                              {console.log("TABLE-ITEMS:", item)}
                            </div>
                          </td>
                        );
                    })}
                    <ButtonsTable
                      id={data.id}
                      tBody={tBody}
                      setTBody={setTBody}
                      type={type}
                    />
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={tHeader.length + 1} className="text-center">
                  {error}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

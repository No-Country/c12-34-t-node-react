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
                              {item}
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

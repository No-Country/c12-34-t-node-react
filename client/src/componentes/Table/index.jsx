import React from "react";
import { RiDeleteBin5Line } from "react-icons/Ri";
import { BiEditAlt } from "react-icons/Bi";
import { AiOutlineUser } from "react-icons/Ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TableV1 = ({ tHeader, tBody, setTBody }) => {
  return (
    <>
      <div data-theme="light" className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-[#1A1363] text-white">
              <th></th>
              {tHeader && tHeader.map((item, i) => <th key={i}>{item}</th>)}
            </tr>
          </thead>
          <tbody>
            {tBody.length >= 1 ? (
              tBody.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-warning"
                      />
                    </td>
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
                    />
                  </tr>
                );
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
  );
};

export default TableV1;

function ButtonsTable({ id, tBody, setTBody }) {
  const editItem = (id) => {
    toast.success(`Elemento ${id} editado`);
  };
  const deleteItem = (_id) => {
    const newBody = tBody.filter((item) => item.id !== _id);
    setTBody(newBody);
    toast.success(`Elemento ${id} eliminado`);
  };
  return (
    <td className="flex justify-end gap-4">
      <button
        onClick={() => editItem(id)}
        className="hover:scale-125 transition-all"
      >
        <BiEditAlt />
      </button>
      <button
        onClick={() => deleteItem(id)}
        className="hover:scale-125 transition-all"
      >
        <RiDeleteBin5Line />
      </button>
      <ToastContainer autoClose={1000} />
    </td>
  );
}

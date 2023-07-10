import  { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/Ri";
import { BiEditAlt } from "react-icons/Bi";
// import { AiOutlineUser } from "react-icons/Ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TableV1 = () => {

    const tableHeader = [
        "Nombre completo",
        "Plan",
        "Celular",
        "Mail",
        "Inicio",
        "Vencimiento",
        "Acción",
      ];
      const tableBody = [
        {
          id: 1,
          nombre: "Kristin Watson",
          plan: "full",
          celular: "123456789",
          mail: "kristin@mail.com",
          inicio: "Text",
          vencimiento: "08/08/2023",
        },
        {
          id: 2,
          nombre: "Floyd Miles",
          plan: "free pass",
          celular: "456789123",
          mail: "floyd@mail.com",
          inicio: "Text",
          vencimiento: "08/08/2023",
        },
        {
          id: 3,
          nombre: "Brooklyn Simmons",
          plan: "2 weeks",
          celular: "789123456",
          mail: "brooklyn@mail.com",
          inicio: "Text",
          vencimiento: "08/08/2023",
        },
      ];
      const [tHeader, setTHeader] = useState(tableHeader);
      const [tBody, setTBody] = useState(tableBody);







  return (
    <>
      <div data-theme="light" className="overflow-x-auto w-full">
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
                              {subI === 1 && null}
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
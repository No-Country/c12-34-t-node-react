import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import editIcon from "../../assets/imgs/editIcon.png";
import deleteIcon from "../../assets/imgs/deleteIcon.png";
import { axiosDeleteEmployees, axiosGetEmployees, axiosPutEmployees } from "../../hooks/axiosEmployees";

export function ButtonsTable({ id, tBody, setTBody, type, setTError }) {
  const [inputFields, setInputFields] = useState([]);

  const editItem = (_id) => {
    let edited = [];
    const itemBody = tBody.find((item) => item.id === _id);
    let itemBody2 = [];

    Object.values(itemBody).map((value) => itemBody2.push(value));

    for (let i = 0; i <= itemBody2.length; i++) {
      if (i >= 1) {
        if (inputFields[i] !== null && inputFields[i] !== undefined) {
          edited[i] = inputFields[i];
        } else {
          edited[i] = itemBody2[i];
        }
      }
    }

    tBody.map((item) => {
      if (item.id === id) {
        if (type === "employee") {
          let newElementEdited = {
            name: edited[1],
            email: edited[2],
            contact: edited[3],
            occupation: edited[4],
          }
          axiosPutEmployees(newElementEdited, _id, "employee")
        }
      }
      return item
    })
    setInputFields([]);
  };
  const handleDelete = async (id, type) => {
    if (type === "employee") {
      await axiosDeleteEmployees(id, "employee");
      await axiosGetEmployees(setTBody, setTError, "employees");
    }
  };
  function handleChange(i, e) {
    let event = e.target.value
    // console.log("EVENT:", event)
    const values = [...inputFields]
    values[i] = event;
    setInputFields(values);
  }
  
  return (
    <td className="grow flex flex-nowrap my-2 items-center gap-3 px-1">
      {/* The button to open modal */}

      <label htmlFor={`my_modal_${id}`} className="shrink-0">
        <img
          src={editIcon}
          alt="Imagen de Lápiz que quiere indicar, editar la fila"
          className="btn p-0.5 bg-pallete-white hover:bg-pallete-green border-0"
        />
      </label>
      <input type="checkbox" id={`my_modal_${id}`} className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          {/* Content */}
          <h3 className="font-PoppinsBold text-lg text-center mb-2">
            Editar elemento
          </h3>

          {tBody.length >= 1 &&
            tBody.map((data, i) => {
              return (
                <div key={i} className="grid gap-4">
                  {Object.values(data).map((item, subI) => {
                    // console.log("TABLE-ITEMS:", item, "INDEX:", subI)
                    if (tBody[i].id === id && subI !== 0 && subI !== 5 && subI !== 6) {
                      return (
                        <input
                          id={`input_${subI}`}
                          key={subI}
                          type="text"
                          placeholder={item} // SE VISUALIZA EL VALOR DEL INPUT ANTES DE MODIFICAR
                          value={inputFields[subI] || ""}
                          className="input input-sm input-bordered placeholder:font-PoppinsRegular font-PoppinsRegular"
                          onChange={(e) => handleChange(subI, e)}
                        />
                      );
                    }
                  })}
                </div>
              );
            })}

          <div className="modal-action">
            <label
              htmlFor={`my_modal_${id}`}
              className="btn btn-sm px-10 shadow-sm font-PoppinsSemibold text-pallete-grey bg-inherit border-pallete-grey hover:shadow-xl hover:bg-inherit"
            >
              Cancelar
            </label>
            <button onClick={() => editItem(id)}>
              <label
                className="btn btn-sm px-10 rounded-xl flex justify-center items-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow hover:border-amber-400 leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue"
                htmlFor={`my_modal_${id}`}
              >
                Guardar
              </label>
            </button>
          </div>
        </div>
      </div>

      <button onClick={() => handleDelete(id, type)}>
        <img
          src={deleteIcon}
          alt="Imagen de Lápiz que quiere indicar, editar la fila"
          className="btn p-0.5 bg-pallete-white hover:bg-pallete-yellow border-0"
        />
      </button>
    </td>
  );
}

// export default ButtonsTable;

import React, { useState, useContext } from "react";
import { UserContext } from "../../store/userContext";
import { axiosPostEmployees } from "../../hooks/axiosEmployees";

export const ButtonAdd = ({ tBody, tHeader, type }) => {
  const { userId } = useContext(UserContext);
  
  const [inputField, setInputField] = useState([]);
  
  const addElement = () => {
    if (type === "employee") {
      let newElement = {
        name: inputField[0],
        email: inputField[1],
        contact: inputField[2],
        occupation: inputField[3],
        adminId: userId,
      };
      axiosPostEmployees(newElement, "employee");
    }
    setInputField([]);
  };
  function handleChange(i, e) {
    let event = e.target.value;
    const values = [...inputField];
    values[i] = event;
    setInputField(values);
  }
  return (
    <div className="flex justify-center">
      {/* The button to open modal */}
      <label
        htmlFor="my_modal_add"
        className="btn btn-md px-10 py-1.5 mx-auto rounded-xl flex justify-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow hover:shadow-md leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue"
      >
        Agregar
      </label>

      <input type="checkbox" id="my_modal_add" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Agregar</h3>
          <div className="grid gap-4">
            {tBody &&
              tHeader.map((item, i) => {
                return (
                  <div key={i}>
                    <label className="block" htmlFor={`input-${i}`}>
                      {item}
                    </label>
                    <input
                      id={`input-${i}`}
                      value={inputField[i] || ""}
                      onChange={(e) => handleChange(i, e)}
                      type="text"
                      className="w-full input input-sm input-bordered placeholder:font-PoppinsRegular font-PoppinsRegular"
                    />
                  </div>
                );
              })}
          </div>
          <div className="modal-action">
            <label
              htmlFor="my_modal_add"
              className="btn btn-sm px-10 shadow-sm font-PoppinsSemibold text-pallete-grey bg-inherit border-pallete-grey hover:shadow-xl hover:bg-inherit "
            >
              Cancelar
            </label>
            <label
              onClick={addElement}
              className="btn btn-sm px-10 rounded-xl flex justify-center items-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow hover:border-amber-400 leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue"
              htmlFor="my_modal_add"
            >
              Guardar
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

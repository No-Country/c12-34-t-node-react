export const Cards = ({card}) => {

  return (
    <div
      key={card.id}
      className="card w-auto  bg-[#343A40]  shadow-xl h-auto mx-auto px-5"
    >
      <div className="flex">
        <div className="avatar float-left h-[80px] mt-[25px]">
          <div className="w-24 rounded-full">
            <img src={card.imagen} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title text-[15px] text-white b">{card.titulo}</h2>
          <p className="text-white">{card.horario}</p>
          <div className="card-actions float-right ">
            <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">
              {card.profe}
            </button>
            <div className="text-white text-[12px] ml-[40px]">
              <p>{card.lugares} Lugares</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

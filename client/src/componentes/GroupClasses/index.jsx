import "./clases.css";
import Logo from "../Title/assets/FitnessCenterLogoGym.png";
import { Cards } from "./Cards";
import { useFilter } from "./useFilter";
import { Buttons } from "./Buttons";

const GroupClasses = () => {

  const { filteredCards, setFilter } = useFilter();

  const onChangeFilter = (e) => {
    setFilter({
      turno: e.target.value,
    });
  };

  return (
   
      <div className="w-full">

        <div className="w-full mt-5 mx-[2rem]">
          <header className="flex justify-center items-center">
            <img
              className="w-32 "
              src={Logo}
              alt="FitnessCenterLogoGym logo de la marca y aplicación web Fitness Center"
            />
          </header>
          <h3 className="self-start text-2xl font-PoppinsBold border-b-2 border-spacing-14 border-pallete-green inline">
            Clases grupales
          </h3>
        </div>


        <div className="flex justify-center">
          <Buttons onChangeFilter={onChangeFilter} />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-4">
          {filteredCards.map((card) => (
            <Cards key={card.id} card={card} />
          ))}
        </div>

      </div>
   
  );
};

export default GroupClasses;

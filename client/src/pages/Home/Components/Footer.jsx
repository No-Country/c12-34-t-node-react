import {MdOutlineExitToApp} from "react-icons/md"

export const Footer = () => {
  return (
    <footer className="footer fixed bottom-0 left-0 w-full p-4 bg-[#343A40] text-base-content">
      <div className="flex items-center ">
        <div>
          <button className="ml-0">
          <MdOutlineExitToApp className="text-lg"/>
          </button>
        </div>
        <div className="flex  justify-center">
          <p className="text-center sm:mx-auto text-[#FFFFFF]">
            Fitness Center Gym / Lugones 24 Capital Federal
          </p>
        </div>
      </div>
    </footer>
  );
};

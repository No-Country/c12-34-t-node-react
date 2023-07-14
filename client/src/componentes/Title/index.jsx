import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-start ml-6">
      <h1 className="text-black md:text-3xl text-xl pb-5 border-[#5FCA56] border-b-2 hover:scale-125 transition-all">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;

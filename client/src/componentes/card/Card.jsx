import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const ItemCard = ({ data }) => {
  const { name, position, logo } = data;

  return (
    <div className="card w-80 bg-slate-100 hover:scale-105 transition-all">
      <div className="card-body text-center">
        <div className="avatar justify-center">
          <div className="w-24 rounded-full">
            <img src={logo} />
          </div>
        </div>
        <h2 className="card-title block text-black">{name}</h2>
        <h3 className="block text-xl text-gray-600">{position}</h3>
        <p className="text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint
          rem sunt sequi voluptatibus veritatis voluptatum ad
        </p>
        <div className="card-actions justify-between">
          <a
            target="_blank"
            href=""
            className="btn btn-outline btn-circle btn-primary"
          >
            {<BsFacebook size={30} />}
          </a>
          <a
            target="_blank"
            href=""
            className="btn btn-outline btn-circle btn-primary"
          >
            <BsTwitter size={30} />
          </a>
          <a
            target="_blank"
            href=""
            className="btn btn-outline btn-circle btn-primary"
          >
            <BsInstagram size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

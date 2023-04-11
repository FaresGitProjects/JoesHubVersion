import React from "react";
import Section from "section";
import pizzaImage from "./images/pizza.jpg";
import "./item.css"

interface ItemProps {
  img: string;
  title: string;
  descr: string;
}

function Item({ img, title, descr }: ItemProps) {
  return (
    <div
    className="item
    sm:mr-10 my-2.5 shadow-neutral-600
    shadow-md border-black sm:block flex
    rounded-lg overflow-clip
    "
    >
      <img
      className="sm:min-w-full w-1/3
      object-cover"
      src={img}
      alt={title}
      />
      <div className="i_text
      p-4 pb-8">
        <h1 
        className="i_t_title 
        w-fit pb-2 font-semibold
        ">{title}</h1>
        <p className="i_t_descr
        ">{descr}</p>
      </div>
    </div>
  );
}

export default Item;

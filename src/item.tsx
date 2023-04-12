import Counter from "counter";
import "./item.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface ItemProps {
  img: string;
  title: string;
  descr: string;
}

function Item({ img, title, descr }: ItemProps) {
  return (
    <div
      className="item
    sm:mr-5 my-2.5 shadow-neutral-600
    shadow-md border-black sm:block flex
    rounded-lg relative"
    >
      <div className="plus-experiment
      absolute border-3 bg-black rounded-full
      z-0 top-0 right-0 translate-x-1/2 -translate-y-1/2 w-10 h-10 flex 
      items-center justify-center hover:cursor-pointer
      hover:w-14 hover:h-14 hover:text-2xl sm:invisible visible">
        <FontAwesomeIcon className="text-white"
          icon={faPlus} /> 
      </div>

      <img
        className="sm:min-w-full sm:h-1/2 w-1/3
      object-cover"
        src={img}
        alt={title}
      />
      <div className="i_text
      p-4 pb-5">
        <h1
          className="i_t_title 
        w-fit pb-2 font-semibold
        ">{title}</h1>
        <p className="i_t_descr
        ">{descr}</p>
      </div>
      {/* <button className="bg-black h-4 w-4 rounded-full">       
      </button> */}
      <div className="count-container
      justify-center py-5 bg-slate-200
      sm:block hidden">
        <Counter />
      </div>
    </div>
  );
}

export default Item;

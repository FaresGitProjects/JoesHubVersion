import Counter from "counter";
import "./item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { StateContext } from "StateProvider";
import { addUnit } from "counter";


interface ItemProps {
  img: string;
  title: string;
  descr: string;
  price: number;
}

function Item({ img, title, descr, price }: ItemProps) {
  const { state, dispatch } = useContext(StateContext);
  
  return (
    <div
      className="item
    sm:mr-5 my-2.5 shadow-neutral-600
    shadow-md border-black sm:block flex
    rounded-lg relative sm:max-w-sm w-auto"
    >
      <div
        onClick={() => addUnit(title, price, dispatch, state)}
        className="plus-experiment
      absolute border-2 border-black active:border-dashed bg-black rounded-full
      z-0 top-0 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 flex 
      items-center justify-center hover:cursor-pointer
      hover:bg-gray-500  text-2xl sm:invisible visible
      active:bg-gray-300 active:text-black text-white"
      >
        <FontAwesomeIcon icon={faPlus} />
      </div>

      <img
        className="sm:min-w-full sm:h-1/2 w-1/3
        object-cover sm:rounded-t-lg sm:rounded-b-none
        rounded-l-lg"
        src={img}
        alt={title}
      />
      <div
        className="i_text
      p-4 pb-5"
      >
        <h1
          className="i_t_title 
        w-fit pb-2 font-semibold
        "
        >
          {title}
        </h1>
        <p
          className="i_t_descr
        "
        >
          {descr}
        </p>
        <p className="i_t_price 
         pt-2.5 text-slate-600">
          $ {price}
        </p>
      </div>
      <div
        className="count-container
      justify-center py-5 bg-slate-200
      sm:block hidden"
      >
        <Counter itemName={title} itemPrice={price}/>
      </div>
    </div>
  );
}

export default Item;

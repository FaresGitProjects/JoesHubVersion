import "rightSideBar.css";
import { StateContext } from "StateProvider";
import { useContext, useEffect } from "react";
import Counter from "counter";

interface RightBarProps {
  price: number
}

function RightSideBar() {
  const { state } = useContext(StateContext);

  return (
    <div className="rightSideBar">
      <div
        className={`s_listR 
            border-l-2 border-t-2 sm:mt-5 mt-1
            border-neutral-400 z-10
            side-menuR 
            ${state.rightSideIsOpen ? "open" : ""}
            ${state.shoppingCart.length === 0? "flex justify-center items-center": ""}`}
      >
        {state.shoppingCart.length === 0
        ?(<p className="sm:text-5xl text-4xl opacity-40
        font-bold mb-72 text-gray-500 text-center"> Your Cart Is Empty! </p>)
        :(state.shoppingCart.map((Item) => {
          if (Item.count > 0) {
            return (
              <div className="s_list_outerR hover:cursor-pointer">
                <div className="s_list_itemR flex items-center">
                  <p className="s_l_i_innerR w-10/12">{Item.name}</p>
                  <Counter itemName={Item.name} itemPrice={Item.price} />
                </div>
              </div>
            )
          }
        }))}
      </div>
    </div>
  );
}

export default RightSideBar;

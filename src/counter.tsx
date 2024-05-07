import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { State, StateContext } from "StateProvider";
import { ActionTypes } from "action";
import { Item } from "StateProvider";

interface CounterProps {
  itemName: string
  itemPrice: number
};

export function addUnit(name: string, itemPrice: number, dispatch: Function, state: State) {
  const unit = state.shoppingCart.find((Item) => (Item.name === name));
  if (unit) {
    dispatch({
      type: ActionTypes.UPDATE_ITEM_COUNT,
      payload: {
        name: name,
        newCount: unit.count + 1,
      },
    });
    console.log("IF: Item Found");
  } else {
    dispatch({ type: ActionTypes.ADD_ITEM, payload: new Item(name, itemPrice) });
    console.log(" ELSE: Item Not Found ");
  }
}

function Counter({itemName, itemPrice}: CounterProps) {
  const { state, dispatch } = useContext(StateContext);

  function removeUnit(name: string) {
    const unit = state.shoppingCart.find((Item) => (Item.name === name));
    if (unit && unit.count > 1) {
      dispatch({
        type: ActionTypes.UPDATE_ITEM_COUNT,
        payload: {
          name: name,
          newCount: unit.count - 1,
        },
      });
      console.log("IF: Decrement", state.shoppingCart);
    } else {
      dispatch({ type: ActionTypes.REMOVE_ITEM, payload: name });
      console.log(" ELSE: Idle ", state.shoppingCart);
    }
  }

  return (
    <div
      className="counter
    flex items-center justify-center"
    >
      <FontAwesomeIcon
        onClick={() => removeUnit(itemName)}
        className="border-2 
      rounded-s-full active:border-dotted active:bg-gray-300 bg-black
       text-white active:text-black border-black
      transition-colors duration-75 hover:cursor-pointer
      active:bg p-2 hover:bg-gray-500"
        icon={faMinus}
      />
      <span className="px-8 sm:py-0 py-4 text-2xl
      sm:border-y-2 sm:border-dashed sm:border-gray-300 sm:bg-gray-200">{
        state.shoppingCart.find((Item)=>(Item.name === itemName))?.count ?? 0
      }</span>
      <FontAwesomeIcon
        onClick={() => addUnit(itemName, itemPrice, dispatch, state)}
        className="border-2 
        rounded-e-full active:border-dotted active:bg-gray-300 bg-black
         text-white active:text-black border-black
        transition-colors duration-75 hover:cursor-pointer
        active:bg p-2 hover:bg-gray-500"
        icon={faPlus}
      />
    </div>
  );
}

export default Counter;

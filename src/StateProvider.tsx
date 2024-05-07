import React, {
  createContext,
  ReactNode,
  useReducer,
  useState,
} from "react";

import { reducer } from "./reducer";
import { Action } from "./action";

export class Category {
  title: string;
  roster: Item[];

  constructor(title: string = "Placeholder", roster: Item[] =
    [new Item("Scicilian-#001"),
    new Item("Margarita-#002"),
    new Item("Cheese-#003")]) {
    this.title = title
    this.roster = roster
  }
}

export class Item {
  name: string;
  descr: string;
  img: string; // Path to image
  count: number;
  price: number;
  /** Rework to include images and descriptions */

  constructor(name: string, price: number = -1,
    descr: string = "No DescriptionNo DescriptionNo Description", img: string = "/images/NoImageImage.jpg") {
    this.name = name;
    this.price = price;
    this.descr = descr;
    this.count = 1;
    this.img = img;
  }
}
// Define the shape of the state
export interface State {
  shoppingCart: Item[];
  categories: Category[];
  isDelivery: boolean;

  rightSideIsOpen: boolean;
  setRightSideIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  leftSideIsOpen: boolean;
  setLeftSideIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
// Create the context with the initial state


const initialState: State = {
  shoppingCart: [],
  categories: [new Category(), new Category()],
  isDelivery: false,

  rightSideIsOpen: false,
  setRightSideIsOpen: () => { },
  leftSideIsOpen: false,
  setLeftSideIsOpen: () => { },
}

const StateContext = createContext<{ state: State; dispatch: React.Dispatch<Action> }>({
  state: initialState,
  dispatch: () => { },
});

interface StateProviderProps {
  children: ReactNode;
}

const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };

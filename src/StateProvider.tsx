import React, {
  createContext,
  useState,
  ReactNode,
} from "react";

class Item {
    name: string;
    count: number;

    constructor(name: string, count: number) {
        this.name = name;
        this.count = count;
    }
}
// Define the shape of the state
export interface State {
  shoppingCart: Item[];

  rightSideIsOpen: boolean;
  setRightSideIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  leftSideIsOpen: boolean;
  setLeftSideIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
// Create the context with the initial state
const StateContext = createContext<State>({
  shoppingCart: [],
  rightSideIsOpen: false,
  setRightSideIsOpen: () => {},
  leftSideIsOpen: false,
  setLeftSideIsOpen: () => {},
});

interface StateProviderProps {
  children: ReactNode;
}

const StateProvider: React.FC<StateProviderProps> = ({ children }) =>  {
  const [leftSideIsOpen, setLeftSideIsOpen] = useState(false);
  const [rightSideIsOpen, setRightSideIsOpen] = useState(false);
  // Your state and state update logic here
  const stateValues: State = {
    shoppingCart: [new Item('Sicilian', 1), new Item('Margarits', 2) ],
    rightSideIsOpen,
    setRightSideIsOpen,
    leftSideIsOpen,
    setLeftSideIsOpen,
  };

  return (
    <StateContext.Provider value={stateValues}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };

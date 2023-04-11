import React, {
  createContext,
  useState,
  ReactNode,
} from "react";

class Item {
    item: string;
    count: number;

    constructor(item: string, count: number) {
        this.item = item;
        this.count = count;
    }
}
// Define the shape of the state
export interface State {
  shoppingCart: Item[];
  SideIsOpen: boolean;
  setSideIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
// Create the context with the initial state
const StateContext = createContext<State>({
  shoppingCart: [],
  SideIsOpen: false,
  setSideIsOpen: () => {},
});

interface StateProviderProps {
  children: ReactNode;
}

const StateProvider: React.FC<StateProviderProps> = ({ children }) =>  {
  const [SideIsOpen, setSideIsOpen] = useState(false);
  // Your state and state update logic here
  const stateValues: State = {
    shoppingCart: [new Item('Sicilian', 1), new Item('Margarits', 2) ],
    SideIsOpen,
    setSideIsOpen,
  };

  return (
    <StateContext.Provider value={stateValues}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };

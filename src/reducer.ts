// reducer.ts
import { State } from './StateProvider';
import { Action, ActionTypes } from './action';

export const reducer = (state: State, action: Action): State => {
 
  switch (action.type) {
    case ActionTypes.TOGGLE_LEFT_SIDE:
      return { ...state, leftSideIsOpen: !state.leftSideIsOpen };

    case ActionTypes.TOGGLE_RIGHT_SIDE:
      return { ...state, rightSideIsOpen: !state.rightSideIsOpen };

    case ActionTypes.ADD_ITEM:
      return { ...state, shoppingCart: [...state.shoppingCart, action.payload] };

    case ActionTypes.REMOVE_ITEM:
      return { ...state, shoppingCart: state.shoppingCart.filter(item => item.name !== action.payload) };

    case ActionTypes.UPDATE_ITEM_COUNT:
        return {
            ...state,
            shoppingCart: state.shoppingCart.map((item) =>
              item.name === action.payload.name
                ? { ...item, count: action.payload.newCount }
                : item
            ),
          };

    default:
      return state;
  }
};

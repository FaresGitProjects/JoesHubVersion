import { State } from "StateProvider";
import { ActionTypes } from "action";
// utils/formatPrice.js
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export function formatPrice(price: number) {
    return formatter.format(price);
}

export function closeSideBars(state: State, dispatch: Function) {
    if (state.leftSideIsOpen) {
        dispatch({ type: ActionTypes.TOGGLE_LEFT_SIDE });
    }
    if (state.rightSideIsOpen) {
        dispatch({ type: ActionTypes.TOGGLE_RIGHT_SIDE });
    }
}

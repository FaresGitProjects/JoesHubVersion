
import { Item } from "./StateProvider";

export enum ActionTypes {
  TOGGLE_LEFT_SIDE,
  TOGGLE_RIGHT_SIDE,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM_COUNT
}

// Actions.ts

export interface ToggleLeftSideAction {
  type: ActionTypes.TOGGLE_LEFT_SIDE;
}

export interface ToggleRightSideAction {
  type: ActionTypes.TOGGLE_RIGHT_SIDE;
}

export interface AddItemAction {
  type: ActionTypes.ADD_ITEM;
  payload: Item;
}

export interface RemoveItemAction {
  type: ActionTypes.REMOVE_ITEM;
  payload: string; // Assuming the name is unique for each item
}

export interface UpdateItemCountAction {
    type: ActionTypes.UPDATE_ITEM_COUNT;
    payload: {
      name: string; // Assuming the name is unique for each item
      newCount: number;
    };
  }

export type Action =
  | ToggleLeftSideAction
  | ToggleRightSideAction
  | AddItemAction
  | RemoveItemAction
  | UpdateItemCountAction;

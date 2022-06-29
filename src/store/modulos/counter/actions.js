import { plus, less } from "./actionsTypes";

export const addNumber = (payload) => ({ type: plus, payload });

export const subNumber = (payload) => ({ type: less, payload });

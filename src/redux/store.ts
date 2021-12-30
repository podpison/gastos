import { applyMiddleware, combineReducers, createStore } from "redux";
import { staticReducer } from "./staticReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    static: staticReducer
});

type Reducers = typeof reducers;
export type StateType = ReturnType<Reducers>;

type Propetries<T> = T extends {[key: string]: infer U} ? U : never;
export type ActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<Propetries<T>>;

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
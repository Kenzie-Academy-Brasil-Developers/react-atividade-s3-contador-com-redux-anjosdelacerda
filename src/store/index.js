import { legacy_createStore as createStore, combineReducers } from "redux";

import counterReducer from "./modulos/counter/reducer";

const reducers = combineReducers({ render: counterReducer });

const store = createStore(reducers);

export default store;

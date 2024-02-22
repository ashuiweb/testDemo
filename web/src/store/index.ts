import { combineReducers, createStore } from "redux";
import authReducer, { AuthReducersType } from "./auth/reducer";
const reducers = {
    authReducer,
};
export interface AppState {
    authReducer: AuthReducersType;
}
const reducer = combineReducers(reducers);
export const store = createStore(reducer);

export default reducer;

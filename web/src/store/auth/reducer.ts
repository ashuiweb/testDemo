/* eslint-disable @typescript-eslint/no-explicit-any */
import { SET_AUTH, USER_LOGOUT } from "./actionTypes";

const initialState = {
    isLogined: false,
    userInfo: {},
};
export interface AuthReducersType {
    isLogined: boolean;
    userInfo: any;
}
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isLogined: action.payload.isLogined,
                userInfo: action.payload.userInfo,
            };
        case USER_LOGOUT:
            return {
                isLogined: false,
                userInfo: {},
            };
        default:
            return state;
    }
};

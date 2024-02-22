import { SET_AUTH } from "./actionTypes";

export const storeLogin = (userInfo = {}) => {
    return {
        type: SET_AUTH,
        payload: {
            isLogined: true,
            userInfo,
        },
    };
};

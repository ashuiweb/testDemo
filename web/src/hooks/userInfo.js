import { useSelector } from "react-redux";

/**
 * 获取用户登录信息
 * @returns
 */
export function useUserInfo() {
    const userInfo = useSelector(state => {
        return state.authReducer.userInfo;
    });
    return userInfo;
}


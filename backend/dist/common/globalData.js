"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalData = exports.setGlobalData = void 0;
const globalData = {};
const setGlobalData = (k, v, o) => {
    const value = { __value: v, __options: o };
    globalData[k] = value;
};
exports.setGlobalData = setGlobalData;
const getGlobalData = (k) => {
    const data = globalData[k];
    if (!data)
        return null;
    const { __value, __options } = data;
    if (__options.once)
        delete globalData[k];
    return __value;
};
exports.getGlobalData = getGlobalData;
//# sourceMappingURL=globalData.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = exports.FromReq = void 0;
const common_1 = require("@nestjs/common");
exports.FromReq = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const res = data ? request[data] || null : request;
    return res;
});
const CurrentUser = () => (0, exports.FromReq)('user');
exports.CurrentUser = CurrentUser;
//# sourceMappingURL=fromReq.js.map
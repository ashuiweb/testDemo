"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
function Auth() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')));
}
exports.Auth = Auth;
//# sourceMappingURL=auth.js.map
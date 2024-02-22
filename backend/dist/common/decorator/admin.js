"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const common_1 = require("@nestjs/common");
const admin_guard_1 = require("../guard/admin.guard");
const auth_1 = require("./auth");
function Admin() {
    return (0, common_1.applyDecorators)((0, auth_1.Auth)(), (0, common_1.UseGuards)(admin_guard_1.AdminGuard));
}
exports.Admin = Admin;
//# sourceMappingURL=admin.js.map
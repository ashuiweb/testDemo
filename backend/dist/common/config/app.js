"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)("app", () => ({
    name: "ashuiweb",
    TOKEN_SECRET: "ashuiweb",
    EXPIRESIN: "10d",
}));
//# sourceMappingURL=app.js.map
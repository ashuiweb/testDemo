"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const base_service_1 = require("../../../base.service");
const helper_1 = require("../../../common/helper");
let LoginService = class LoginService extends base_service_1.BaseService {
    constructor(model, jwt) {
        super();
        this.model = model;
        this.jwt = jwt;
    }
    async login(dto) {
        const res = await this.find({ username: dto.username, password: (0, helper_1.encode)(dto.password) });
        if (res.length > 0) {
            const data = res[0];
            return {
                jwtToken: await this.token(data),
                id: data._id,
            };
        }
        else {
            (0, helper_1.validateFail)("password", "用户名或密码不正确");
        }
    }
    async token(user) {
        return await this.jwt.signAsync({
            id: user._id,
        });
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Admin")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], LoginService);
//# sourceMappingURL=login.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const config_service_1 = require("../../common/config.service");
const adminschema_1 = require("../../schema/adminschema");
const foodschema_1 = require("../../schema/foodschema");
const foods_controller_1 = require("./foods/foods.controller");
const foods_service_1 = require("./foods/foods.service");
const login_controller_1 = require("./login/login.controller");
const login_service_1 = require("./login/login.service");
let ApiModule = class ApiModule {
};
exports.ApiModule = ApiModule;
exports.ApiModule = ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                inject: [config_service_1.ConfigService],
                useFactory: (config) => {
                    return {
                        secret: config.app.TOKEN_SECRET,
                        signOptions: { expiresIn: config.app.EXPIRESIN },
                    };
                },
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: "Admin",
                    schema: adminschema_1.AdminSchema,
                    collection: "admin",
                },
                {
                    name: "Foods",
                    schema: foodschema_1.FoodsSchema,
                    collection: "foods",
                },
            ]),
        ],
        controllers: [login_controller_1.LoginController, foods_controller_1.FoodsController],
        providers: [login_service_1.LoginService, foods_service_1.FoodsService],
    })
], ApiModule);
//# sourceMappingURL=api.module.js.map
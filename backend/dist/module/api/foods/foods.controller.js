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
exports.FoodsController = void 0;
const common_1 = require("@nestjs/common");
const list_dto_1 = require("./dto/list.dto");
const foods_service_1 = require("./foods.service");
let FoodsController = class FoodsController {
    constructor(service) {
        this.service = service;
    }
    async index(dto) {
        const page = Number(dto.page) || 1;
        const size = Number(dto.size) || 10;
        const name = dto.name;
        const where = name ? { FoodItems: { $regex: new RegExp(name, "i") } } : {};
        const list = await this.service.list(where, page, size);
        const total = await this.service.count(where);
        const totalPages = Math.ceil(total / size);
        return {
            number: page,
            size,
            totalElements: total,
            totalPages,
            content: list,
        };
    }
};
exports.FoodsController = FoodsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_dto_1.ListDto]),
    __metadata("design:returntype", Promise)
], FoodsController.prototype, "index", null);
exports.FoodsController = FoodsController = __decorate([
    (0, common_1.Controller)("foods"),
    __metadata("design:paramtypes", [foods_service_1.FoodsService])
], FoodsController);
//# sourceMappingURL=foods.controller.js.map
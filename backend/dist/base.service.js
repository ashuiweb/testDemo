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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
let BaseService = class BaseService {
    constructor() { }
    find(where, fields) {
        return this.model.find(where, fields).sort({ sort: 1 });
    }
    count(where) {
        return this.model.find(where).count();
    }
    async add(json, ..._args) {
        try {
            const data = new this.model(json);
            return await data.save();
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async save(where, data) {
        try {
            return await this.model.updateOne(where, data);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async delete(where) {
        try {
            return await this.model.deleteOne(where);
        }
        catch (error) {
            return null;
        }
    }
};
exports.BaseService = BaseService;
exports.BaseService = BaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BaseService);
//# sourceMappingURL=base.service.js.map
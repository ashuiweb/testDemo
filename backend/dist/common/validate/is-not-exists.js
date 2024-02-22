"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsExist = exports.IsNotExist = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const globalData_1 = require("../globalData");
const prisma = new client_1.PrismaClient();
function IsExists(table, fields, flag = true, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsExistsRule',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [table],
            options: { message: `数据${flag ? '已' : '不'}存在`, ...validationOptions },
            validator: {
                async validate(value, args) {
                    const data = await prisma[table].findFirst({
                        where: {
                            OR: fields.map((field) => ({ [field]: value })),
                        },
                    });
                    if (data) {
                        (0, globalData_1.setGlobalData)(JSON.stringify({ ...args.object }), data, { once: true });
                    }
                    return flag ? !data : !!data;
                },
            },
        });
    };
}
function IsNotExist(table, fields, validationOptions) {
    return IsExists(table, fields, true, validationOptions);
}
exports.IsNotExist = IsNotExist;
function IsExist(table, fields, validationOptions) {
    return IsExists(table, fields, false, validationOptions);
}
exports.IsExist = IsExist;
//# sourceMappingURL=is-not-exists.js.map
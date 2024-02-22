"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = exports.paginatePrisma = exports.paginate = exports.requestAuthKey = exports.requestKey = exports.sendFail = exports.sendSuccess = exports.validateFail = void 0;
const common_1 = require("@nestjs/common");
const md5 = require("md5");
const validateFail = (field, message) => {
    throw new common_1.BadRequestException({
        error: "Bad Request",
        message: [{ field, message }],
        statusCode: 400,
    });
};
exports.validateFail = validateFail;
const sendSuccess = (message = "操作成功") => {
    throw new common_1.BadRequestException({
        error: null,
        message: [{ message }],
        statusCode: 200,
    });
};
exports.sendSuccess = sendSuccess;
const sendFail = (message = "操作失败") => {
    throw new common_1.BadRequestException({
        error: null,
        message,
        statusCode: 400,
    });
};
exports.sendFail = sendFail;
const requestKey = (request) => request.method + request.originalUrl;
exports.requestKey = requestKey;
const requestAuthKey = (request) => request.method + request.originalUrl + request.headers["authorization"];
exports.requestAuthKey = requestAuthKey;
const paginate = (data) => ({
    page: data.page,
    size: data.size,
    total_size: data.total,
    total_page: Math.ceil(data.total / data.size),
    data: data.data,
});
exports.paginate = paginate;
const paginatePrisma = async (modal, page, size, orderBy = "create_time", order = "desc", where) => {
    const data = await modal.findMany({
        take: size,
        skip: (page - 1) * size,
        orderBy: {
            [orderBy]: order,
        },
        where,
    });
    const total = await modal.count({ where });
    return (0, exports.paginate)({ data, page, size, total });
};
exports.paginatePrisma = paginatePrisma;
const encode = (data, time = 1) => {
    while (time) {
        data = md5(data);
        time--;
    }
    return data;
};
exports.encode = encode;
//# sourceMappingURL=helper.js.map
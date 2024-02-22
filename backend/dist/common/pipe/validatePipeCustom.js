"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class ValidatePipeCustom extends common_1.ValidationPipe {
    flattenValidationErrors(validationErrors) {
        const errorInfo = validationErrors.map((it) => ({
            field: it.property,
            message: Object.values(it.constraints).shift(),
        }));
        return errorInfo;
    }
}
exports.default = ValidatePipeCustom;
//# sourceMappingURL=validatePipeCustom.js.map
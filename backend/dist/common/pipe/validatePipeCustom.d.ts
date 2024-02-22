import { ValidationError, ValidationPipe } from '@nestjs/common';
export default class ValidatePipeCustom extends ValidationPipe {
    protected flattenValidationErrors(validationErrors: ValidationError[]): any[];
}

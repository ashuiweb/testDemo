import { ValidationOptions } from 'class-validator';
export declare function IsNotExist(table: string, fields: string[], validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
export declare function IsExist(table: string, fields: string[], validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;

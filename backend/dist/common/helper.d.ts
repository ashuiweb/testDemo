import { Request } from "express";
export declare const validateFail: (field: string, message: string) => never;
export declare const sendSuccess: (message?: string) => never;
export declare const sendFail: (message?: string) => never;
export declare const requestKey: (request: Request) => string;
export declare const requestAuthKey: (request: Request) => string;
export declare const paginate: (data: {
    page: number;
    size: number;
    total: number;
    data: any[];
}) => {
    page: number;
    size: number;
    total_size: number;
    total_page: number;
    data: any[];
};
export declare const paginatePrisma: (modal: {
    findMany: (data: any) => Promise<any>;
    count: (data?: any) => Promise<any>;
}, page: number, size: number, orderBy?: string, order?: any, where?: any) => Promise<{
    page: number;
    size: number;
    total_size: number;
    total_page: number;
    data: any[];
}>;
export declare const encode: (data: string, time?: number) => string;

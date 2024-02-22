/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
type WhereType<T, B = {
    _id: string;
    attr?: Record<string, any>;
}> = Partial<B & T>;
import { Model } from "mongoose";
export declare class BaseService<T> {
    model: Model<any>;
    constructor();
    find(where: Partial<T>, fields?: string): import("mongoose").Query<any[], any, {}, any, "find">;
    count(where: Partial<T>): import("mongoose").Query<number, any, {}, any, "count">;
    add(json: WhereType<T>, ..._args: any[]): Promise<any>;
    save(where: WhereType<T>, data: WhereType<T>): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(where: WhereType<T>): Promise<any>;
}
export {};

import { Model } from "mongoose";
import { BaseService } from "src/base.service";
import { Foods, FoodsSchema } from "src/schema/foodschema";
export declare class FoodsService extends BaseService<Foods> {
    model: Model<typeof FoodsSchema>;
    constructor(model: Model<typeof FoodsSchema>);
    list(json?: WhereType<Foods>, currentPage?: number, pageSize?: number): Promise<any[]>;
}

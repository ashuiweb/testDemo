import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseService } from "src/base.service";
import { Foods, FoodsSchema } from "src/schema/foodschema";
@Injectable()
export class FoodsService extends BaseService<Foods> {
    constructor(@InjectModel("Foods") public model: Model<typeof FoodsSchema>) {
        super();
    }

    async list(json: WhereType<Foods> = {}, currentPage = 1, pageSize = 10) {
        return this.model.aggregate([
            {
                $sort: {
                    sort: 1,
                },
            },
            {
                $match: json as any,
            },
            { $skip: (currentPage - 1) * pageSize },
            { $limit: pageSize },
        ]);
    }
}

import { Injectable } from "@nestjs/common";
type WhereType<T, B = { _id: string; attr?: Record<string, any> }> = Partial<B & T>;

import { Model } from "mongoose";

@Injectable()
export class BaseService<T> {
    public model: Model<any>;

    constructor() {}
    find(where: Partial<T>, fields?: string) {
        return this.model.find(where as any, fields).sort({ sort: 1 });
    }
    count(where: Partial<T>) {
        return this.model.find(where as any).count();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async add(json: WhereType<T>, ..._args: any[]) {
        try {
            const data = new this.model(json);
            return await data.save();
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    // 修改数据
    async save(where: WhereType<T>, data: WhereType<T>) {
        try {
            return await this.model.updateOne(where as any, data);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    // 删除数据
    async delete(where: WhereType<T>): Promise<any> {
        try {
            return await this.model.deleteOne(where as any);
        } catch (error) {
            return null;
        }
    }
}

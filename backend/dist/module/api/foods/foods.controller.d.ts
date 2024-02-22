import { ListDto } from "./dto/list.dto";
import { FoodsService } from "./foods.service";
export declare class FoodsController {
    private service;
    constructor(service: FoodsService);
    index(dto: ListDto): Promise<{
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
        content: any[];
    }>;
}

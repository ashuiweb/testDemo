import { Body, Controller, Post } from "@nestjs/common";
import { ListDto } from "./dto/list.dto";
import { FoodsService } from "./foods.service";

@Controller("foods")
export class FoodsController {
    constructor(private service: FoodsService) {}

    @Post()
    async index(@Body() dto: ListDto) {
        const page = Number(dto.page) || 1;
        const size = Number(dto.size) || 10;
        const name = dto.name;
        const where = name ? { FoodItems: { $regex: new RegExp(name, "i") } } : ({} as any);

        const list = await this.service.list(where, page, size);

        const total = await this.service.count(where);
        const totalPages = Math.ceil(total / size);
        return {
            number: page,
            size,
            totalElements: total,
            totalPages,
            content: list,
        };
    }
}

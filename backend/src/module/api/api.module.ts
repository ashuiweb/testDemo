import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigService } from "src/common/config.service";
import { AdminSchema } from "src/schema/adminschema";
import { FoodsSchema } from "src/schema/foodschema";
import { FoodsController } from "./foods/foods.controller";
import { FoodsService } from "./foods/foods.service";
import { LoginController } from "./login/login.controller";
import { LoginService } from "./login/login.service";

@Module({
    imports: [
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    secret: config.app.TOKEN_SECRET,
                    signOptions: { expiresIn: config.app.EXPIRESIN },
                };
            },
        }),
        MongooseModule.forFeature([
            {
                name: "Admin",
                schema: AdminSchema,
                collection: "admin",
            },
            {
                name: "Foods",
                schema: FoodsSchema,
                collection: "foods",
            },
        ]),
    ],
    controllers: [LoginController, FoodsController],
    providers: [LoginService, FoodsService],
})
export class ApiModule {}

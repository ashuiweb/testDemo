import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommonModule } from "./common/common.module";
import { ApiModule } from "./module/api/api.module";

@Module({
    imports: [CommonModule, ApiModule, MongooseModule.forRoot(process.env.MONGODB_URL)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

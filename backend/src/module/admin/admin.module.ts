import { Module } from "@nestjs/common";

import { MainController } from "./main/main.controller";
import { ManagerController } from "./manager/manager.controller";

@Module({
    controllers: [MainController, ManagerController],
})
export class AdminModule {}

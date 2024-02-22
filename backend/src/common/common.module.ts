import { CacheModule } from "@nestjs/cache-manager";
import { Global, Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { CacheService } from "./cache.service";
import { app } from "./config";
import { ConfigService } from "./config.service";

@Global()
@Module({
    imports: [
        NestConfigModule.forRoot({
            load: [app],
            isGlobal: true,
        }),
        CacheModule.register({
            isGlobal: true,
            ttl: 60000, //60s
        }),
    ],
    providers: [ConfigService, CacheService],
    exports: [ConfigService, CacheService],
})
export class CommonModule {}

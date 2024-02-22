import { ConfigType } from '@nestjs/config';
import { app as appConfig } from './config';
export declare class ConfigService {
    readonly app: ConfigType<typeof appConfig>;
    constructor(app: ConfigType<typeof appConfig>);
}

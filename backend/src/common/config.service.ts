import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { app as appConfig } from './config'

@Injectable()
export class ConfigService {
  constructor(@Inject(appConfig.KEY) public readonly app: ConfigType<typeof appConfig>) {}
}

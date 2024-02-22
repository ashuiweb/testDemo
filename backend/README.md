创建 admin、default、api三个模块
配置cookie、session、ejs、静态资源目录
>main.ts

```ts
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'

import { AppModule } from './app.module'
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useStaticAssets('public', { prefix: '/public' })
  app.setBaseViewsDir('views')
  app.use(cookieParser())
  app.setViewEngine('ejs')
  app.use(
    session({
      secret: 'ashuiweb',
      resave: false,
      saveUninitialized: true,
      rolling: true,
      cookie: { maxAge: 60000 * 30, httpOnly: true },
    }),
  )
  await app.listen(3002)
}
bootstrap()

```
## admin 模块
创建main、login控制器
> login

```ts
import { Controller, Get, Render } from '@nestjs/common'

@Controller('admin/login')
export class LoginController {
  @Get()
  @Render('admin/login')
  index() {
    return {}
  }
}

```
 

import { Controller, Get, Render } from '@nestjs/common'

@Controller('admin')
export class MainController {
  @Get()
  @Render('admin/index')
  index() {
    return {}
  }
  @Get('welcome')
  @Render('admin/welcome')
  welcome() {
    return {}
  }
}

import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { LoginService } from "./login.service";

@Controller("api/login")
export class LoginController {
    constructor(private loginService: LoginService) {}
    @Post()
    index(@Body() dto: LoginDto) {
        return this.loginService.login(dto);
    }
}

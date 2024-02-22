import { LoginDto } from "./dto/login.dto";
import { LoginService } from "./login.service";
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    index(dto: LoginDto): Promise<{
        jwtToken: string;
        username: string;
        id: any;
    }>;
}

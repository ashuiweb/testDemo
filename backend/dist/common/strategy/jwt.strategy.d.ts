import { Strategy } from "passport-jwt";
import { LoginService } from "src/module/api/login/login.service";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly loginService;
    constructor(loginService: LoginService);
    validate({ id }: {
        id: any;
    }): Promise<any>;
}
export {};

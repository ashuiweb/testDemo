import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";
import { BaseService } from "src/base.service";
import { Admin, AdminSchema } from "src/schema/adminschema";
import { LoginDto } from "./dto/login.dto";
export declare class LoginService extends BaseService<Admin> {
    model: Model<typeof AdminSchema>;
    private jwt;
    constructor(model: Model<typeof AdminSchema>, jwt: JwtService);
    login(dto: LoginDto): Promise<{
        jwtToken: string;
        username: string;
        id: any;
    }>;
    token(user: any): Promise<string>;
}

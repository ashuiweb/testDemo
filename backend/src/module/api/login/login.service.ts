import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseService } from "src/base.service";
import { encode, validateFail } from "src/common/helper";
import { Admin, AdminSchema } from "src/schema/adminschema";
import { LoginDto } from "./dto/login.dto";
@Injectable()
export class LoginService extends BaseService<Admin> {
    constructor(
        @InjectModel("Admin") public model: Model<typeof AdminSchema>,
        private jwt: JwtService
    ) {
        super();
    }

    async login(dto: LoginDto) {
        const res = await this.find({ username: dto.username, password: encode(dto.password) });
        if (res.length > 0) {
            const data = res[0];
            return {
                jwtToken: await this.token(data),
                username: dto.username,
                id: data._id,
            };
        } else {
            validateFail("password", "username or password is wrong!");
        }
    }

    async token(user: any) {
        return await this.jwt.signAsync({
            id: user._id,
        });
    }
}

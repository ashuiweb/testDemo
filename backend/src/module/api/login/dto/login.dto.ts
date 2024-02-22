import { IsNotEmpty, Matches } from "class-validator";

export class LoginDto {
    @Matches(/^[a-z1-2]+$/i, { message: "用户名只能是字母或数字" })
    @IsNotEmpty({ message: "用户名不能为空" })
    username: string;
    @IsNotEmpty({ message: "密码不能为空" })
    password: string;
}

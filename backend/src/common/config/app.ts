import { registerAs } from "@nestjs/config";

export default registerAs("app", () => ({
    name: "ashuiweb",
    TOKEN_SECRET: "ashuiweb",
    EXPIRESIN: "10d",
}));

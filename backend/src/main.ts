import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";

import { AppModule } from "./app.module";
import ValidatePipeCustom from "./common/pipe/validatePipeCustom";
async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useStaticAssets("public", { prefix: "/" });
    app.setBaseViewsDir("views");
    app.use(cookieParser());
    app.setViewEngine("ejs");
    app.enableCors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    });
    app.use(
        session({
            secret: "ashuiweb",
            resave: false,
            saveUninitialized: true,
            rolling: true,
            cookie: { maxAge: 60000 * 30, httpOnly: true },
        })
    );
    app.useGlobalPipes(new ValidatePipeCustom());
    await app.listen(3002);
}
bootstrap();

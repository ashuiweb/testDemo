"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app_module_1 = require("./app.module");
const validatePipeCustom_1 = require("./common/pipe/validatePipeCustom");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
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
    app.use(session({
        secret: "ashuiweb",
        resave: false,
        saveUninitialized: true,
        rolling: true,
        cookie: { maxAge: 60000 * 30, httpOnly: true },
    }));
    app.useGlobalPipes(new validatePipeCustom_1.default());
    await app.listen(3002);
}
bootstrap();
//# sourceMappingURL=main.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cli_color_1 = __importDefault(require("cli-color"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const views_routes_1 = __importDefault(require("./routes/views.routes"));
const env_1 = require("./config/env");
const path_1 = require("path");
function main() {
    const app = (0, express_1.default)();
    app.set('view engine', 'ejs');
    app.set('views', (0, path_1.join)(__dirname, 'views'));
    app.use(express_1.default.static((0, path_1.join)(__dirname, 'public')));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use('/', views_routes_1.default);
    app.use(errorHandler_1.default);
    app.listen(env_1.PORT, () => {
        console.log(cli_color_1.default.cyan(`server started on port `) + cli_color_1.default.greenBright.bold(env_1.PORT));
    });
}
main();

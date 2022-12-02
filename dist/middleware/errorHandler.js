"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_color_1 = __importDefault(require("cli-color"));
function default_1(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    console.log(cli_color_1.default.red.bold(err.message));
    return res.render('error', {
        errorMessage: err.message,
        errorName: err.name,
    });
}
exports.default = default_1;

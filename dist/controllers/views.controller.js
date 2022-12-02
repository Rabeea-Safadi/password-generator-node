"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorHandler = exports.indexHandler = void 0;
const lodash_random_1 = __importDefault(require("lodash.random"));
function indexHandler(req, res) {
    res.render('index');
}
exports.indexHandler = indexHandler;
function generatorHandler(req, res) {
    const { minLength, maxLength, includeSymbols } = req.body;
    const lower = 'qwertyuioplkjhgfdsazxcvbnm';
    const upper = lower.toUpperCase();
    const nums = '1234567890';
    const symbols = '!@#$%';
    const chosen = includeSymbols ? lower + upper + nums + symbols : lower + upper + nums;
    const length = (0, lodash_random_1.default)(maxLength, minLength, false);
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
        generatedPassword += chosen[(0, lodash_random_1.default)(chosen.length, 0)];
    }
    res.render('index', { generatedPassword });
}
exports.generatorHandler = generatorHandler;

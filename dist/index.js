"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = (_b = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a['PORT']) !== null && _b !== void 0 ? _b : 3000;
app.get('/', (req, res) => {
    res.send('Hello from TS & Express');
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
//# sourceMappingURL=index.js.map
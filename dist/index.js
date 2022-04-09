"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const port = (_b = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a['PORT']) !== null && _b !== void 0 ? _b : 3000;
        app.get('/', (req, res) => {
            res.send('Hello from TS & Express');
        });
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
        // await prisma.user.create({
        //   data: {
        //     name: 'Alice',
        //     email: 'test@prisma.io',
        //     posts: {
        //       create: { title: 'Hello World' },
        //     },
        //     profile: {
        //       create: { bio: 'I like turtles' },
        //     },
        //   },
        // });
        // console.log('BOOYAH');
        const allUsers = yield prisma.user.findMany({
            include: {
                Post: true,
                Profile: true,
            },
        });
        console.log('Found em');
        console.dir(allUsers, { depth: null });
    });
}
main()
    .catch((e) => {
    throw e;
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('bye');
    yield prisma.$disconnect();
}));
//# sourceMappingURL=index.js.map
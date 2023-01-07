"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const postgres_1 = require("./config/postgres");
require("./models/user");
require("./models/services");
require("./models/technicians");
require("./models/items");
const PORT = process.env.PORT === undefined ? 3000 : process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.router);
(0, postgres_1.dbAutenticate)()
    .then(() => {
    console.log('Connection has been established successfully');
})
    .catch((err) => {
    console.error(err);
});
app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
});

import express from "express";
import rootRouters from "./routers/root.routers.js";
import { sequelize } from "./models/index.js";

const app = express();

app.use(express.json());
app.use(rootRouters);

const PORT = 8080;

app.listen(PORT, () => {
    console.log("server start port : ", PORT);
});


await sequelize.sync({ alter: true });
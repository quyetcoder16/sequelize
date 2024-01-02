import { Sequelize } from "sequelize";
import { DB_SQL } from "../configs/db.config.js";
import { createStudentModel } from "./student.model.js";

const sequelize = new Sequelize(DB_SQL.DATABASE, DB_SQL.USER_NAME, DB_SQL.PASSWORD, {
    port: DB_SQL.PORT,
    host: DB_SQL.HOST,
    dialect: DB_SQL.DIALECT,
});

const checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log("connect success!");
    } catch (error) {
        console.log("error : ", error);
    }
}

checkConnect();

const Student = createStudentModel(sequelize);


export {
    sequelize,
    Student,
}
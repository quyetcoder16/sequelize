import { DataTypes } from "sequelize"

const createStudentModel = async (sequelize) => {
    return sequelize.define(
        "student",
        {
            hoTen: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            numberClass: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            tableName: "students",
            timestamps: true,
        }
    )
}

export {
    createStudentModel,
}
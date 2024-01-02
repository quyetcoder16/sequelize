import { Student } from "../models/index.js"

const createST = async (student) => {
    console.log(student)
    try {
        const newStudent = await Student.create(student);
        return newStudent;
    } catch (error) {
        console.log(error);
    }
    // return newStudent;
}

export {
    createST,
}
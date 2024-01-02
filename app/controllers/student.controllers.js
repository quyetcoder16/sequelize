import { createST } from "../services/student.services.js";

const getListStudent = (req, res) => {
    res.status(200).send("get list");
}


const createStudent = async (req, res) => {
    const student = req.body;
    const newStudent = await createST(student);
    res.status(200).send(newStudent);
}


export {
    getListStudent,
    createStudent,
}
import { createST, deleteById, getDetailById, getList, updateST } from "../services/student.services.js";

const getListStudent = async (req, res) => {
    try {
        const listStudent = await getList();
        if (listStudent) {
            res.status(200).send(listStudent);
        } else {
            res.status(404).send("Not Found!");
        }
    } catch (error) {
        console.log("error : ", error);
    }
}

const getDetailStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const studentDetail = await getDetailById(id);
        if (studentDetail) {
            res.status(200).send(studentDetail);
        } else {
            res.status(404).send("Not Found!");
        }
    } catch (error) {
        console.log("error : ", error);
    }
}


const createStudent = async (req, res) => {
    try {
        const student = req.body;
        const newStudent = await createST(student);
        res.status(201).send(newStudent);
    } catch (error) {
        console.log("error : ", error);
    }
}

const updateStudent = async (req, res) => {
    try {
        const student = req.body;
        const { id } = req.params;
        const studentUpdate = await updateST(id, student);
        if (studentUpdate) {
            res.status(200).send(studentUpdate);
        } else {
            res.status(404).send("Not found!");
        }
    } catch (error) {
        console.log("error : ", error);
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const studentDelete = await deleteById(id);
        if (studentDelete) {
            res.status(200).send(studentDelete);
        } else {
            res.status(404).send("Not found!");
        }
    } catch (error) {
        console.log("error : ", error);
    }
}


export {
    getListStudent,
    createStudent,
    getDetailStudent,
    updateStudent,
    deleteStudent,
}
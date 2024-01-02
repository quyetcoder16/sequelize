import { Student } from "../models/index.js"

const getList = async () => {
    const listStudent = await Student.findAll();
    if (listStudent) {
        return listStudent
    } else {
        return false
    }
}

const getDetailById = async (id) => {
    const studentDetail = await Student.findOne({
        where: {
            id
        }
    });
    if (studentDetail) {
        return studentDetail;
    } else {
        return false;
    }
}

const createST = async (student) => {
    const newStudent = await Student.create(student);
    return newStudent;
}

const updateST = async (id, student) => {
    const studentIndex = getDetailById(id);
    if (studentIndex) {
        const studentUpdate = await Student.update(student, {
            where: {
                id
            }
        });
        return studentUpdate;
    } else {
        return false;
    }
}

const deleteById = async (id) => {
    const studentIndex = getDetailById(id);
    if (studentIndex) {
        console.log(studentIndex);
        await Student.destroy({
            where: {
                id
            }
        });
        return studentIndex;
    } else {
        return false;
    }
}

export {
    createST,
    getList,
    getDetailById,
    updateST,
    deleteById,
}
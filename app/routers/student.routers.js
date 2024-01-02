import express from "express";
import { createStudent, getListStudent } from "../controllers/student.controllers.js";

const studentRouters = express.Router();

studentRouters.get("/get-list-student", getListStudent);
studentRouters.post("/create-student", createStudent);

export default studentRouters;
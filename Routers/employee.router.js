import express from 'express';
import {
  createEmp,
  getAllEmp,
  getEmpById,
  updateEmpById,
  deleteEmpById,
} from "../Controllers/employee.controller.js";

const router = express.Router()

router.post("/create", createEmp)
router.get("/getemp", getAllEmp);
router.get("/empid/:id", getEmpById);
router.put("/update/:id", updateEmpById);
router.delete("/delete/:id", deleteEmpById);
export default router
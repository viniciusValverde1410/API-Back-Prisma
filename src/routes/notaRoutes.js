import express from "express";
import notaController from "../controllers/notaController.js";
const router = express.Router();
router.get("/", notaController.getAll);
export default router;
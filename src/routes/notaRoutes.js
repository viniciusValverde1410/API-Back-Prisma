import express from "express";
import notaController from "../controllers/notaController.js";
const router = express.Router();
router.get("/", notaController.getAll);
router.get("/:id", notaController.getById);
router.post("/", notaController.create);
router.put("/:id", notaController.update);
router.delete("/:id", notaController.delete);
export default router;
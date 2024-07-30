import express from "express";
import shoesController from "../controllers/shoes";

const router = express.Router();
const shoes = shoesController();

router.get("/shoes", shoes.getAll);

export default router;

import express from "express";
import { addreview, deltereview, editreview, getreviews } from "../controller/reviewcontroller.js";
const router=express.Router();
router.get("/",getreviews);
router.post("/add",addreview);
router.put("/:id",editreview);
router.delete("/:id",deltereview);


export default router;
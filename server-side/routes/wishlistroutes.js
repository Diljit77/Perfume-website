import express from "express";
import { addmylist, deltemylist, getmylist } from "../controller/wishlistcontroller.js";
const router=express.Router();

router.get("/",getmylist);
router.post("/add",addmylist);
router.delete("/:id",deltemylist);
export default router;


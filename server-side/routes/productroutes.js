import express from "express";
import { addproduct, deleteproduct, getallproduct, getproductbyid, updateproduct } from "../controller/Productcontroller.js";
const router=express.Router();
router.get("/",getallproduct);
router.post("/add",addproduct);
router.get("/:id",getproductbyid);
router.put("/:id",updateproduct);
router.delete("/:id",deleteproduct)

export default router;
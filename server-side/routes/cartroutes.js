import express from "express";
import { addcart, deltecart, getallcartproduct, updatecart } from "../controller/cartcontroller.js";
const router=express.Router();

router.get("/",getallcartproduct);
router.post("/add",addcart);
router.put("/:id",updatecart);
router.delete("/:id",deltecart);


export default router;
import express from "express";
const app=express();
import cartRoute from "./routes/cartroutes.js"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import reviewRoute from "./routes/reviewroute.js"
import "dotenv/config"
import productRoute from "./routes/productroutes.js"
import userRoute from "./routes/userroutes.js"
import wishlistroute from "./routes/wishlistroutes.js"
app.use(cors());

const port=process.env.port||process.env.PORT;
// middleware
app.use(bodyParser.json());

//Route


//monogdb
app.use("/api/auth",userRoute);
app.use("/api/product",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/review",reviewRoute);
app.use("/api/wishlist",wishlistroute);
mongoose.connect(process.env.MONGO_DB_ATLAS,{
   

}).then(()=>{

    console.log("Database Connection is ready......")
}).catch((err)=>{
console.log(err)
})
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})


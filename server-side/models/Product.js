import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Men", "Women", "Unisex"],
    },
    discount:
    {
   type:Number,
   required:true,
},
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  
    images:[
        {
            type:String,
            required:true,
        }
    ],
    
    longevity: {
      type: String,
      enum: ["Short", "Moderate", "Long-lasting"],
    },
    sizes: [
        {
          size: { type: String, required: true }, // Example: "30mL", "50mL"
          price: { type: Number, required: true, min: 0 }, // Price for this size
          stock: { type: Number, required: true, min: 0 }, // Stock for this size
        },
      ],
  
    numReviews:{
        type:Number,
        default:0
            },
         
   
    occasion: [{ type: String }], // e.g., Casual, Party, Office
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

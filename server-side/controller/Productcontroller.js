import Product from "../models/Product.js";
import cloudinary from "cloudinary"
import plimit from "p-limit"
cloudinary.v2;
 cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
})

export const getallproduct =async (req,res) => {

    try {
          const ProductList=await Product.find(req.query);
            if(!ProductList){
              return  res.status(500).json({success:false,message:"not exist"})
            }
            return res.status(200).json(ProductList)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"something went wrong",status:false})
    }
}
export const addproduct=async (req,res) => {
    try {
        const limit = plimit(2);
        const imagetoUpload = req.body.images.map((image) => {
            return limit(async () => {
    
                const result = await cloudinary.uploader.upload(image)
                // console.log(image)
                return result;
            });
        });
        const uploadstatus = await Promise.all(imagetoUpload);
        const imgURl = uploadstatus.map((item) => {
            return item.secure_url
        });
        if (!uploadstatus) {
            return res.status(500).json({
                error: "image is not found",
                status: false
            })
        }
    
        let product = new Product({
            name: req.body.name, //1
            description: req.body.description, //2
            brand: req.body.brand,//3
            price: req.body.price,//4
            images: req.body.images,//5
            category: req.body.category,//6
            stock:req.body.stock,//7
            rating: req.body.rating,//8
            numReviews: req.body.numReviews,//9
            discount:req.body.discount,//10
            longevity:req.body.longevity,//11
            occasion:req.body.occasion,//12
            sizes:req.body.sizes
            
    
        });
        product = await product.save();
        if (!product) {
            res.status(500).json({
                error: err,
                success: false
    
            })
        }
       return res.status(201).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"something went wrong",status:false})
    }
}
export const getproductbyid=async (req,res) => {
    try {
          const product=await Product.findById(req.params.id);
            if(!product){
               return res.status(402).json({message:"the id is not exist"})
            }
            return res.status(200).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"something went wrong",status:false})
    }
}
export const updateproduct=async (req,res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id, {
                name: req.body.name, //1
                description: req.body.description, //2
                brand: req.body.brand,//3
                price: req.body.price,//4
                images: req.body.images,//5
                category: req.body.category,//6
                stock:req.body.stock,//7
                rating: req.body.rating,//8
                numReviews: req.body.numReviews,//9
                discount:req.body.discount,//10
                longevity:req.body.longevity,//11
                occasion:req.body.occasion,//12
                sizes:req.body.sizes
                
        
            } , {
            new: true
        }
        )
        if (!product) {
            res.status(404).json({
                message: "the Product is not updated",
                success: false
            })
    
        }
        res.status(200).json(
            {
                message: "The product is updated",
                success: true
            }
        )
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"something went wrong",status:false})
    }
}
export const deleteproduct=async (req,res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deleteProduct) {
            return res.status(404).json({
                message: "Product Not Found",
                success: false
            })
    
        }
       return res.status(201).send({
            message: "the product is deleted"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"something went wrong",status:false})
    }
}
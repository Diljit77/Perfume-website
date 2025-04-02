import Cart from "../models/Cart.js";
export const getallcartproduct=async (req,res) => {
    try {
        const CartList=await Cart.find(req.query)
        if(!CartList){
           return res.status(500).json({success:false, message:"There is no product"})
        }
      return  res.status(200).json(CartList);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong",success:false})
    }
}
export const addcart=async (req,res) => {
    try {
        let carts=await Cart.find({productId:req.body.productId});

        if(carts.length!==0){
     return res.status(500).json({ status:false,message:"the product is alredy added"})
        }else{
    
        
        let cart=new Cart({
            productName:req.body.productName,
            images:req.body.images,
            rating:req.body.rating,
            price:req.body.price,
            Quantiy:req.body.Quantiy,
            subtotal:req.body.subtotal,
        productId:req.body.productId,
        userId:req.body.userId
      
        })
        cart= await cart.save();
        if(!cart){
          return  res.status(500).json({message:"Something Wrong",status:false})
        }
     res.status(201).json({message:"the product is added",cart:cart});
    } 
}catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong",success:false})
    }
    
}
export const deltecart=async (req,res) => {
   try {
    const cartId = req.params.id;


    const deletedCart = await Cart.findByIdAndDelete(cartId);
    if (!deletedCart) {
        return res.status(404).json({ message: "Product not found in cart" });
    }

    res.status(200).json({ message: "Deleted Successfully" });
   } catch (error) {
    console.log(error);
    res.status(500).json({message:"something went wrong",success:false})
   } 
}
export const updatecart=async (req,res) => {
    try {
        const cartId = req.params.id;

       

        // Check if cart exists
        const cart = await Cart.findById(cartId);
        if (!cart) {
            return res.status(404).json({ message: "The product does not exist" });
        }

        // Update Cart
        const updateCart = await Cart.findByIdAndUpdate(
            cartId,
            {
                productName: req.body.productName,
                images: req.body.images,
                rating: req.body.rating,
                price: req.body.price,
                Quantiy:req.body.Quantiy,
                subtotal: req.body.subtotal,
                productId: req.body.productId,
                userId: req.body.userId,
            },
            { new: true }
        );

        if (!updateCart) {
            return res.status(500).json({ message: "Some problem occurred" });
        }

        res.status(200).json({ message: "Updated Successfully", updateCart });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong",success:false})
    }
}
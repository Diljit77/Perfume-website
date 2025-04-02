import MyList from "../models/Wishlist.js";
export const addmylist=async (req,res) => {
try {
      let item=await MyList.find({productId:req.body.productId});
    
        if(item.length!==0){
    res.status(401).json({ status:false,message:"the product is alredy added"})
        }else{
    
        
        let myList=new MyList({
            productName:req.body.productName,
            images:req.body.images,
            rating:req.body.rating,
            price:req.body.price,
            
        productId:req.body.productId,
        userId:req.body.userId
      
        })
        myList=myList.save();
        if(!myList){
           return res.status(500).json({message:"Somehing Wrong",status:false})
        }
       return res.status(201).json({status:true,message:"aded succesfully",myList:myList})
} 
}catch (error) {
    console.log(error);
   return res.status(500).json({message:"something went wrong",status:false})
}
    
}
export const getmylist=async (req,res) => {
    try {
          const myList=await MyList.find(req.query)
                if(!myList){
                   return res.status(500).json({success:false, message:"There is no product"})
                }
             return   res.status(200).json(myList);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"something went wrong",success:false})
    }
    
}
export const deltemylist=async (req,res) => {
    try {
        const itemId = req.params.id;
        
                // Validate ObjectId
              
        
                const deleteditem = await MyList.findByIdAndDelete(itemId);
                if (!deletedCart) {
                    return res.status(404).json({ message: "Product not removed!something went wrong" });
                }
        
                res.status(200).json({ message: "Removed  Successfully" });
    } catch (error) {
        console.log(error);
   return res.status(500).json({message:"something went wrong",success:false})
        
    }
}
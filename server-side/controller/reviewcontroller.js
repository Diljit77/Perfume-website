import Review from "../models/Review.js";
export const getreviews=async (req,res) => {
    try {
        let review=[];
            if(req.query.productId!==undefined && req.query.productId!==null && req.query.productId!==""){
                review=await Review.find({productId:req.query.productId});
            }else{
                review=await Review.find();
            }
            if(!review){
              return  res.status(500).json({success:false, message:"no Review"})
            }
            return res.status(200).json(review)

    } catch (error) {
        
        console.log(error);
        res.status(500).json({message:"something went wrong",success:false})
    }
}
export const addreview=async (req,res) => {
    try {

         let review=new Review({
                customerName:req.body.customerName,
                productId:req.body.productId,
                review:req.body.review,
                customerRating:req.body.customerRating,
                customerId:req.body.customerId
            })
            if(!review){
              return  res.status(500).json({
                    error:err,
                    success:false
                })
            }
            review =await review.save()
          return  res.status(201).json(review);
    } catch (error) {
        console.log(error);
      return  res.status(500).json({message:"something went wrong",success:false})
    }
}
export const editreview=async (req,res) => {
    try {
        const review=await Review.findById(req.params.id);
        if(!review){
            return res.status(404).json({message:"review not found",success:false})
        }
        const updatedreview=await Review.findByIdAndUpdate(req.params.id,{
            customerName:req.body.customerName,
            productId:req.body.productId,
            review:req.body.review,
            customerRating:req.body.customerRating,
            customerId:req.body.customerId
        },{new:true});
    if(!updatedreview){
        return res.status(404).json({message:"the review is not updated",success:false})
    }
    return res.status(200).json({message:"the review is updated succesfully",success:true})
    } catch (error) {
         
        console.log(error);
        return res.status(500).json({message:"something went wrong",success:false})
    }
}
export const deltereview=async (req,res) => {
    try {
           const review=await Review.findByIdAndDelete(req.params.id);
                if(!review){
                    return res.status(404).json({message:"no such review exist",success:false})
                }
           
                return res.status(200).json({message:"review deleted succesfully",success:true})
    } catch (error) {
        console.log(error);
       return res.status(500).json({message:"something went wrong",success:false})
    }
}
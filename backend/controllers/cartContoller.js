
import userModel from '../models/userModel.js'

//add to the user cart 
const addToCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }else{
            cartData[req.body.itemId] +=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added to the cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }

}





//remove item from the user cart

const removeFromCart=async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"removed from cart"})
    } catch (error) {
        console.log(error);
        res.json({succcess:false,message:"Error in the removing the item from the cart"})
        
    }


}

//fetch usercard data
const getCart = async (req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({succcess:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({succcess:false,message:"Error in fetching the data from the cart"})
        
    }


}
export {addToCart,removeFromCart,getCart}
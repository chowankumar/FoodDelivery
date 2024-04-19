import userModel from '../models/userModel.js'

//add to the user cart 
const addToCart = async(req,res)=>{
    try {
        let userData = await userModel.findOne({_id:req.body.userId});
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

}

//fetch usercard data
const getCart = async (req,res)=>{

}
export {addToCart,removeFromCart,getCart}
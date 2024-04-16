import mongoose from "mongoose";

export  const connectDB = async()=>{
  await mongoose.connect(`mongodb+srv://chowankumar:chowan54@cluster0.qaludre.mongodb.net/FoodService`).then(()=>{
    console.log("db connection succesfully")
  })
}
import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true

    },
    category: {
        type: String,
        required: true
    }
})



//if model is already present then it wil not create it again//
const foodModel =mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;
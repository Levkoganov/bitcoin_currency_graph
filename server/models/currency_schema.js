// Dependencies
import mongoose from "mongoose";

const { Schema } = mongoose; // Destruct schema from mongoose
const setCurrency = new Schema({dates: {}});

export default mongoose.model("Currency", setCurrency);

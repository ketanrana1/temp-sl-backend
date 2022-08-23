import mongoose from 'mongoose';
import { MONGO_URI } from "../constants/enviornment.js"

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
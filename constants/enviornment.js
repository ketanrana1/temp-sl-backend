import dotenv from "dotenv"
dotenv.config({ path: '.env' });

export const {
    PORT,
    MONGO_URI
} = process.env 
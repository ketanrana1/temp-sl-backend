import express from "express";
import "./database/mongoose.js";
import { route } from "./routes/index.js";
import { PORT } from "./constants/enviornment.js";

const app = express()
app.use(express.json());
route(app);
app.listen(PORT, () => {
  console.log("Server has started!");
});

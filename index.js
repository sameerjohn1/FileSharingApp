import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import DBconnection from "./database/db.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

app.use("/", router);

const PORT = 8000;

DBconnection();

app.listen(PORT, () => {
  console.log(`server is running on Port ${PORT}`);
});

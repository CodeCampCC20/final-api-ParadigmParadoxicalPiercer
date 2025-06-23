import express from "express";
import cors from "cors";
import morgan from "morgan";
//routing
import authRouter from "./src/routes/authRoute.js";

const app = express();
//basic middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routing
//http://localhost:8383
app.use("/auth", authRouter);

//port
const port = 8383;
//start server
app.listen(port, () => console.log(`Server is running on port ${port}`));

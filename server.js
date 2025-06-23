import express from "express";
import cors from "cors";
import morgan from "morgan";
//routing
import authRouter from "./src/routes/authRoute.js";
import userRouter from "./src/routes/userRoute.js";
import notFoundMiddleware from "./src/middlewares/notfound.middleware.js";
import errorMiddleware from "./src/middlewares/error.middleware.js";
import docRouter from "./src/routes/doctorRoute.js";
import healthRecordRouter from "./src/routes/recordRoute.js";

const app = express();
//basic middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routing
//http://localhost:8383
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/doctors", docRouter);
app.use("/health-records", healthRecordRouter);

//error path
app.use(notFoundMiddleware);
app.use(errorMiddleware);

//port
const port = 8383;
//start server
app.listen(port, () => console.log(`Server is running on port ${port}`));

import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from "./config/connectDB";
import cors from "cors";
require("dotenv").config();

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);
connectDB();

let port = process.env.port || 4141;

app.listen(port, () => {
  console.log(`Backend Nodejs is running in port ${port}`);
});

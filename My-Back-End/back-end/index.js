import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/student.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(cors());

app.use("/students", studentRoutes);

//app.use(bodyParser.json({limit: "20mb", extended:true}));
//app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));
app.use(express.json());



const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.txywk9e.mongodb.net/?retryWrites=true&w=majority`

const PORT = process.env.PORT || 3001

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

// mongoose.set("useFindAndModify", false);
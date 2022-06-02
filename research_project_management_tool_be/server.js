const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const connectDB = require("./src/database/connection");
const marking_rubrics = require("./src/routes/marking-rubric.router");

//get env file configarations
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

//connect mongo db database
connectDB();

const userRouter = require("./src/routes/users");

//load routers
app.use("/users", userRouter);
app.use("/api", marking_rubrics);
app.use("/", require("./src/routes/router"));

app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});

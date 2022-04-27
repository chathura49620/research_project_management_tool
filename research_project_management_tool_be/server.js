const express = require("express");
const cors = require("cors");
const connectDB = require("./src/database/connection");

//get env file configarations
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//connect mongo db database
connectDB();

const userRouter = require("./src/routes/users");

//load routers
app.use("/users", userRouter);
app.use("/", require("./src/routes/router"));

app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});

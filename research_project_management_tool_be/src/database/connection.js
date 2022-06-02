const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mogo db connection string
    // const con = await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });

    const con = await mongoose.connect(
      "mongodb+srv://admin:admin123@cluster0.jd7sx.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Mongo DB Connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;

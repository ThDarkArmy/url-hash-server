import mongoose from "mongoose";

// dotenv configuration
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database."))
  .catch((err) => console.log("Error in connecting to the databse.", err));

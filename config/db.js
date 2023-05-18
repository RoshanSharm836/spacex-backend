const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);
const connection = (mongoose.connection = async () => {
  await mongoose.connect(
    "mongodb+srv://roshan836sharma:507JdZ5H3wOwrIYs@cluster0.4hplwyh.mongodb.net/"
  );
});

module.exports = connection;

const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://MyDBPass:Swami2002@mycluster-1.rhjnlvf.mongodb.net/inventory?retryWrites=true&w=majority&appName=MyCluster-1";
const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;

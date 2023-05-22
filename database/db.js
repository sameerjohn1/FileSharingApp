import mongoose from "mongoose";

const url =
  "mongodb+srv://filesharing:filesharing@cluster0.q1k6o40.mongodb.net/?retryWrites=true&w=majority";

const DBconnection = async () => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting with the database");
  }
};

export default DBconnection;

import mongoose from "mongoose";

const connectToMongoose = async () => {
  try {
    console.log(process.env.MONGO_DB_URL);
    await mongoose.connect(
      process.env.MONGO_DB_URL,
      console.log("Connected to mongo DB")
    );
  } catch (e) {
    console.log(`error connecting to mongo DB`, e.message);
  }
};

export default connectToMongoose;

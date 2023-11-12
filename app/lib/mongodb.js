const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("db connected");
    }
  } catch {
    console.log(error);
  }
};

export default connectDB;

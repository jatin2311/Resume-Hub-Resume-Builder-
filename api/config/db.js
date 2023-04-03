const mongoose = require("mongoose");
const config = require("../config/index");

const connect = () => {
  try {
    mongoose.connect(
      config.MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (e) => {
        if (e) {
          console.log("Error Occured " + e.message);
          process.exit(1);
        }
        console.log("MONGODB CONNECTED SUCESSFULLY");
      }
    );
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = connect;

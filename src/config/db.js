const mongoose = require("mongoose");
const { NODE_ENV, ATLAS_URL } = require("./server.config");
const databaseError = require("../errors/database.error");
// Connect to the database
console.log(ATLAS_URL);
async function connectToDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(ATLAS_URL, {
        family: 4
      });
    }
  } catch (error) {
    console.error("Error connecting to the database");
    throw new databaseError(error.message);
  }
}

module.exports = connectToDB;

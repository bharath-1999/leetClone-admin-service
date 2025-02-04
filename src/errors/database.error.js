const BaseError = require("./BaseError");
const StatusCodes = require("http-status-codes");
class databaseError extends BaseError {
  constructor(details) {
    super(
      "Database error",
      StatusCodes.BAD_REQUEST,
      `Something went wrong with the database`,
      details
    );
  }
}

module.exports = databaseError;
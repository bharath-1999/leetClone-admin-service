const BaseError = require("./BaseError");
const StatusCodes = require("http-status-codes");
class badRequestError extends BaseError {
  constructor(propertyName, details) {
    super(
      "Bad Request",
      400,
      StatusCodes.BAD_REQUEST,
      `Invalid structure for ${propertyName}`,
      details
    );
  }
}

module.exports = badRequestError;
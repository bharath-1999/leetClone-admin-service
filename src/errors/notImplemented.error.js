const BaseError = require("./BaseError");
const StatusCodes = require("http-status-codes");
class notImplementedError extends BaseError {
  constructor(methodName) {
    super(
      "Unimplemeneted",
      400,
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} is not implemented yet`,
      {}
    );
  }
}

module.exports = badRequestError;
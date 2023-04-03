const GlobalResponse = require("./global_response");

const BigPromise = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    GlobalResponse(res, error.message, false, 401, []);
  }
};

module.exports = BigPromise;

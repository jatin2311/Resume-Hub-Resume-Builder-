const GlobalResponse = (res, msg, success, status, data) => {
  try {
    res.status(status).json({
      msg: msg,
      success: success,
      data: data,
    });
  } catch (error) {
    res.status(status).json({
      msg: "Error occurred",
      success: false,
      data: [],
    });
  }
};

module.exports = GlobalResponse;

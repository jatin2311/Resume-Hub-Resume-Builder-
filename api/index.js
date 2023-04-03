const app = require("./app");
require("./config/db")();
app.listen(3000, () => {
  console.log("Server started");
});

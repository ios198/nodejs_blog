const express = require("express"); // tải thư viên express
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express(); // gọi function

const port = 3000;

// Static file
app.use(express.static(path.join(__dirname, "public")));
// http logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Định nghĩa route -> khi đi dến / thì trả về
app.get("/", (req, res) => {
  // arrow function
  res.render("new");
});
//127.0.0.1 - local host
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

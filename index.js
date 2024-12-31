const express = require("express"); // tải thư viên express
const app = express(); // gọi function
const port = 3000;
// Định nghĩa route -> khi đi dến / thì trả về
app.get("/", (req, res) => {
  // arrow function
  res.send("Hello World!");
});
//127.0.0.1 - local host
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

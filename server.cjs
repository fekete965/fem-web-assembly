const express = require("express");

const PORT = 3000;

const app = express();

// app.use(express.static("./public"));
app.use(express.static("./"));
// app.use(express.static("./js"));

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.static("./public"));
app.use("/js", express.static("./js"));
app.use("/build", express.static("./build"));

app.get("/", (_, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

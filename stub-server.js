const express = require("express");
var cors = require("cors");
const { Parser } = require("json2csv");
const app = express();
const port = 3001;

app.use(cors());

app.get("/downloadData", (req, res) => {
  const fields = ["field1"];
  const opts = { fields };
  const parser = new Parser(opts);
  const csv = parser.parse();
  res.attachment("data.csv");
  res.send(csv);
});

app.post("/uploadData", (req, res) => {
  res.send("");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

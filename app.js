const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");

app.use("/authors", authorRouter);
app.get("/", (req, res) => res.send("Hello , world!"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}`);
});

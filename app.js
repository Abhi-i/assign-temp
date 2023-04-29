const express = require('express');
const app = express();
app.use(express.static('public'))
const router = require("./src/routes/index");

app.use("/", router);
app.use("*", (_, res)=> res.redirect("/upload.html"));

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
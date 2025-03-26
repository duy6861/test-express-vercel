const express = require('express');
const product = require("./phone")

const app = express();
app.use(express.json());
app.use("/product", product)

const port = process.env.PORT || 9001
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = app
const express = require("express");
const productRoutes = require("./phone"); // Import Router

const app = express();
app.use(express.json());
app.use("/product", productRoutes); // Đăng ký Router

const port = process.env.PORT || 9001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

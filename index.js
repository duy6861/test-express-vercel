const express = require("express");
const cors = require("cors"); // Import middleware CORS
const productRoutes = require("./phone"); // Import Router

const app = express();

// Sử dụng CORS để cho phép tất cả các origin truy cập
app.use(cors());

// Middleware cho JSON
app.use(express.json());

// Đăng ký Router
app.use("/product", productRoutes);

const port = process.env.PORT || 9001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

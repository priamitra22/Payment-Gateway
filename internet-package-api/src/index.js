const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const packageRoutes = require("./routes/packageRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Menambahkan routes ke Express app
app.use("/api/packages", packageRoutes);  // Ini harus mengarah ke router
app.use("/api/transactions", transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

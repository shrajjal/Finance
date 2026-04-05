
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");



const app = express();
app.use(express.json());
app.use(cors());

//  DB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected ✅");


  app.listen(5000, () => console.log("Server running on port 5000"));
})
.catch((err) => {
  console.error("DB connection error ❌:", err.message);
});

app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/records", require("./src/routes/recordRoutes"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.listen(5000, () => console.log("Server running"));
 
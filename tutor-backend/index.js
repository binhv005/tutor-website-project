const errorMiddleware = require("./src/middlewares/error.middleware");
require("dotenv").config();

const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const authRoute = require("./src/routes/authRoutes");
const classRoute = require("./src/routes/classRoutes");
const consultationRoute = require("./src/routes/consultationRoutes");

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin is not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/classes", classRoute);
app.use("/api/consultations", consultationRoute);
app.use(errorMiddleware);
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running tai Port ${PORT}`);
});

const express = require("express");
const app = express();
const authRoute = require("./src/routes/authRoutes");
const classRoute = require("./src/routes/classRoutes");
const profileRoute = require("./src/routes/profileRoutes");
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/classes", classRoute);
app.use("/api/profiles", profileRoute);
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running tai Port ${PORT}`);
});

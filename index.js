const express = require("express");
const app = express();
const authRoute = require("./src/routes/authRoutes");
app.use(express.json());

app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running tai Port ${PORT}`);
});

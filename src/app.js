import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

app.use("*", (req, res) => {
  res.status(200).json({
    message: "Not Found. Use /api/v1 to access the Api"
  });
});


export default app;

import express from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import {
  facebookConfig,
  googleConfig,
  serializeUsers,
  deserializeUsers
} from "../src/config/passport";
import Auth from "../src/modules/auth";

// config
googleConfig;
facebookConfig;
serializeUsers;
deserializeUsers;

const app = express();


app.use(cors());
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());

app.use(Auth);
app.get("/home", (req, res) => {
  res.status(200).json({
    message: "welcome home"
  });
});

app.use("*", (req, res) => {
  res.status(200).json({
    message: "Not Found. Use /api/v1 to access the Api"
  });
});

export default app;

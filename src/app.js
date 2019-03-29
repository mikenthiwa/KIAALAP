import express from "express";
import morgan from "morgan";
import passport from "passport";
import {passportConfig, serializeUsers, deserializeUsers} from "../src/modules/passport";
import Auth from "../src/modules/auth";



passportConfig;
serializeUsers;
deserializeUsers;

const app = express();
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());

app.use(Auth);

app.use("*", (req, res) => {
  res.status(200).json({
    message: "Not Found. Use /api/v1 to access the Api"
  });
});

export default app;

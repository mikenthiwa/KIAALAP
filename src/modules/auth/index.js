import express from "express";
import passport from "passport";


const Router = express.Router();
Router.get(
  "/login/facebook",
  passport.authenticate("facebook")
);


module.exports = Router;

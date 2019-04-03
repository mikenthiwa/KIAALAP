import express from "express";
import passport from "passport";
import Auth from "../auth/authController";

const Router = express.Router();

Router.get("/login/facebook", passport.authenticate("facebook"));
Router.get(
  "/facebook/callback",
  passport.authenticate("facebook",
    {failureRedirect : "/"}),
  Auth.socialAuth
);
Router.get(
  "/login/google",
  passport.authenticate("google"
    , {scope: ["profile", "email"]})
);
Router.get(
  "/google/callback",
  passport.authenticate("google" ,
    {failureRedirect: "/login"}),
  Auth.socialAuth
);


export default Router;
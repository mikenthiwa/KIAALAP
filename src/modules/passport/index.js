import passport from "passport";
import Strategy from "passport-facebook";
import env from  "../../config/enviroment";

export const passportConfig = passport.use(
  new Strategy({
    clientID: env.clientID,
    clientSecret: env.clientSecret,
    callbackURL: "/return"
  },
  (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
  })
);

export const serializeUsers = passport.serializeUser((user, cb) =>{
  cb(null, user);
});

export const deserializeUsers = passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});
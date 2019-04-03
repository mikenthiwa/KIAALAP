import passport from "passport/lib";
import facebookStrategy from "passport-facebook/lib";
import googleStrategy from "passport-google-oauth20/lib";
import env from "../enviroment";


export const facebookConfig = passport.use(
  new facebookStrategy({
    clientID: env.facebookVar.clientID,
    clientSecret: env.facebookVar.clientSecret,
    callbackURL: "/facebook/callback",
    profileFields:["id","displayName","emails"],
  },
  async (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
  })
);

export const googleConfig = passport.use(
  new googleStrategy({
    clientID: env.googleVar.googleClientID,
    clientSecret: env.googleVar.googleClientSecret,
    callbackURL: "/google/callback",
    profileFields:["id","displayName","emails"],
  },
  async (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
  })
);

export const serializeUsers = passport.serializeUser((user, cb) =>{
  cb(null, user);
});

export const deserializeUsers = passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

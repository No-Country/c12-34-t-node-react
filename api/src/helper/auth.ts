import { Request } from 'express';
import passport from "passport";

const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user: any, done: any) => {
  // console.log("USUARIO:", user)
  // console.log("USUARIO:", typeof user)

  return done(null, user.id)
})


passport.deserializeUser((user: any, done: any) => {
  return done(null, user)
})


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  passReqToCallback: true
},
  function (req: Request, accessToken: any, refreshToken: any, profile: any, done: any) {
    // console.log(profile)
    done(null, profile)
  }
));
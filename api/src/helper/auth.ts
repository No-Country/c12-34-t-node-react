import { Request } from 'express';
import passport from "passport";
import Google from '../models/Google';
import { IUser, Rol } from '../interfaces/IUser';
import User from '../models/User';

const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  passReqToCallback: true
},
  async function (req: Request, accessToken: any, refreshToken: any, profile: any, done: any) {

    try {
      let user = await User.findOne({
        where: {
          googleId: profile.id
        }
      })
      if (user) {
        return done(null, user);
      } else {
        const newUser: IUser = {
          googleId: profile.id,
          user: profile.displayName,
          email: profile.emails[0].value,
          password: "",
          photo: profile.photos[0].value,
          // rol: Rol.Client
        }
        user = await User.create(newUser)
        console.log("NEW USER:", user)
        return done(null, user);
      }
    }
    catch (error) {
      console.log(error)
    }
  }
));

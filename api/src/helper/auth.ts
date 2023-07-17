import { Request } from 'express';
import passport from "passport";
import Google from '../models/Google';

const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  passReqToCallback: true
},
  async function (req: Request, accessToken: any, refreshToken: any, profile: any, done: any) {

    try {
      let user = await Google.findOne({
        where: {
          googleId: profile.id
        }
      })
      if (user) {
        return done(null, user);
      } else {
        const newUser = ({
          googleId: profile.id,
          name: profile.displayName,
          photo: profile.photos[0].value,
        });
        user = await Google.create(newUser)
        console.log(newUser)
        return done(null, user);
      }
    }
    catch (error) {
      console.log(error)
    }
  }
));

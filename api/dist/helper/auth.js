"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const User_1 = __importDefault(require("../models/User"));
const GoogleStrategy = require('passport-google-oauth2').Strategy;
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((id, done) => {
    User_1.default.findByPk(id).then((user) => {
        done(null, user);
    });
});
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback: true
}, function (
// { req, accessToken, refreshToken, profile, done }:
// ParamsAuth
_req, _accessToken, _refreshToken, profile, done) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log("profile:", profile)
        try {
            let user = yield User_1.default.findOne({
                where: {
                    googleId: profile.id
                }
            });
            if (user) {
                return done(null, user);
            }
            else {
                const newUser = {
                    googleId: profile.id,
                    user: profile.displayName,
                    email: profile.email,
                    password: "",
                    photo: profile.picture,
                };
                user = yield User_1.default.create(newUser);
                // console.log("NEW USER:", newUser)
                return done(null, user);
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}));

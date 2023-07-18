import { Router } from "express"
import { registerUser } from "../services/crudUser/register"
import { loginUser } from "../services/crudUser/login"
import { getAllUsers } from "../services/crudUser/get"
import { upDateUser } from "../services/crudUser/put"
import "dotenv/config";
const { URL_FRONT } = process.env

import passport from "passport"
import "../helper/auth"

import Jwt from "jsonwebtoken"

export const userRoutes = Router()

// ─── Usuario ─────────────────────────────────────────────────────────────────

userRoutes.post("/api/auth", registerUser)

userRoutes.post("/api/login", loginUser)

userRoutes.get("/api/all-users", getAllUsers)

userRoutes.put("/api/update-user/:id", upDateUser)

// ─── Google ─────────────────────────────────────────────────────────────────

userRoutes.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }))

userRoutes.get("/auth/google/callback", passport.authenticate("google", { session: false }),
  (req, res) => {
    Jwt.sign({ user: req.user }, "secretKey", { expiresIn: "5h" },
      (err: any, token: any) => {
        if (err) {
          // return res.json({
          //   token: null,
          // });
          return res.json({ error: err })
        }
        // res.cookie("tokenCookie", token, {
        //   httpOnly: true,
        //   sameSite: "none",
        //   path: "/login",
        //   domain: "http://127.0.0.1:5173",
        //   secure: false
        // })
        // return res.json({
        //   user: req.user,
        //   token,
        // });
        // res.setCookie("userCookie", req.user)
        // res.setHeader('Set-Cookie', `token=${token}`)
        // res.setHeader('Set-Cookie', `user=${req.user}`)
        return res.redirect(`${URL_FRONT}/login?token=${token}&user=${req.user}`)
        // return res.redirect(`http://127.0.0.1:5173/admin/:id?token=${token}&user=${req.user}`)
      }
    );
  }
);

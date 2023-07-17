import { Router } from "express"
import { registerUser } from "../services/crudUser/register"
import { loginUser } from "../services/crudUser/login"
import { getAllUsers } from "../services/crudUser/get"
import { upDateUser } from "../services/crudUser/put"

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
          return res.json({
            token: null,
          });
        }
        return res.json({
          user: req.user,
          token,
        });
      }
    );
  }
);

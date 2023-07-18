import { Router } from "express"
import { registerUser } from "../services/crudUser/register"
import { loginUser } from "../services/crudUser/login"
import { getAllUsers } from "../services/crudUser/get"
import { upDateUser } from "../services/crudUser/put"

import passport from "passport"
import "../helper/auth"

import Jwt from "jsonwebtoken"
import { google } from "googleapis"

export const userRoutes = Router()

// ─── Usuario ─────────────────────────────────────────────────────────────────

userRoutes.post("/api/auth", registerUser)

userRoutes.post("/api/login", loginUser)

userRoutes.get("/api/all-users", getAllUsers)

userRoutes.put("/api/update-user/:id", upDateUser)

// ─── Google ─────────────────────────────────────────────────────────────────

userRoutes.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }))

userRoutes.post("/auth/google/callback", 
  async (req, res) => {
    console.log('req BACK', req.body)
    const { code } = req.body

    
    const auth = new google.auth.OAuth2(
      //google client
       '193481864569-0cmrhpfe0mnut2f52mrdne07bqcgakd7.apps.googleusercontent.com',
      //google secret
       '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',
       req.headers.origin
     );
    
      // console.log(auth)

     const { tokens } = await auth.getToken(decodeURIComponent(code));
   
      // console.log(tokens)

     auth.setCredentials(tokens);
     
     const { data } = await google.oauth2('v2').userinfo.get({auth});
      console.log(data)
    
      return data

      
    // Jwt.sign({ user: req.user }, "secretKey", { expiresIn: "5h" },
    //   (err: any, token: any) => {
    //     if (err) {
    //       return res.json({
    //         token: null,
    //       });
    //     }
    //     return res.json({
    //       user: req.user,
    //       token,
    //     });
    //   }
    // );
  }
);

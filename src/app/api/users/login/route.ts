import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel'
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

connect();

export async function POST (request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {email, password}= reqBody

        // check if user already exists
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "User user doesn't exist"}, {status: 400});
        }

        // check whether password is correct
       const validPassword = await bcrypt.compare(password, user.password)
       if(!validPassword){
        return NextResponse.json({error: "Invalid password"}, {status: 400})
       }
        
        // create token data 
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        // create token
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' })

        const response = NextResponse.json({
            message: "Login successfully",
            success: true
        })
        response.cookies.set("token", token, {
            httpOnly: true,
            // path: '/'    we may use it here but no need for now
        })
        return response;
    } 
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
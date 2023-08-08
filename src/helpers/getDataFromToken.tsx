import { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";

export const getDateFromToken = (request: NextRequest) =>{
    try {
        const encodedToken = request.cookies.get('token')?.value || '';
        const decodedeToken:any = Jwt.verify(encodedToken, process.env.TOKEN_SECRET!)
        return decodedeToken.id;
    } catch (error:any) {
        throw new Error(error.message)
        
    }
}
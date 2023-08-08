import { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) =>{
    try {
        const encodedToken = request.cookies.get('token')?.value || '';
        const decodedeToken:any = Jwt.verify(encodedToken, process.env.TOKEN_SECRET!)  //it not only decode and rerify the password but also gives corresponding data set as response.
        console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',decodedeToken);
        
        return decodedeToken.id;
    } catch (error:any) {
        throw new Error(error.message)
        
    }
}
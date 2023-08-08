import { getDateFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect()

export async function GET(request: NextRequest){
    try {
        const userId = await getDateFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password"); // password field will not be fetched
        return NextResponse.json({
            message: "User found",
            data: user
        })
        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}
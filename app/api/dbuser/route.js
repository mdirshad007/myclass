import { NextResponse } from "next/server";
import { user } from "../util/db";

export function GET(){
    const data= user;
    return NextResponse.json(data,{status:200})
}

export async function POST(request){
    let payload=await request.json();
    console.log(payload)
    if(!payload.id || !payload.email || !payload.first_name || !payload.last_name || !payload.avatar){
        return NextResponse.json({result:"required field is not filled",success:false},{status:400})
    }
  return NextResponse.json({result:"New User Created",success:true},{status:201})
}
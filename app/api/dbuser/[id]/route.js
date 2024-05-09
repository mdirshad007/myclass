import { NextResponse } from "next/server";
import { user } from "../../util/db";

export function GET(request,content){
    const userId=content.params.id;
    const data=user.filter((item)=>item.id==userId);
    return NextResponse.json(data.length!=0?{result:data[0],success:true}:{page:"404",responce:"page not found"},{status:404},{status:200})
}
export async function PUT(request,content){
    let payload=await request.json()
    payload.id=content.params.id
    console.log(payload)
    if(!payload.id){
        return NextResponse.json({result:"Request is not valid",success:true},{status:400})
    }
    return NextResponse.json({result:payload,success:true},{status:200})
}
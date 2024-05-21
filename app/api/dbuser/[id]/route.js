import { NextResponse } from "next/server";
import { user } from "../../util/db";

export function GET(request,content){
    const userId=content.params.id;
    const data=user.filter((item)=>item.id==userId);
    return NextResponse.json(data.length!=0?{result:data[0],success:true}:{page:"404",responce:"page not found"})
}
export async function PUT(request,content){
    let payload=await request.json()
    payload.id=content.params.id
    console.log(payload)
    if(!payload.id || !payload.email || !payload.first_name || !payload.last_name || !payload.avatar){
        return NextResponse.json({result:"Request is not valid",success:true},{status:400})
    }
    return NextResponse.json({result:payload,success:true},{status:200})
}
export function DELETE(request,content){
let id=content.params.id;
if(id){
    return NextResponse.json({result:"User Deleted",success:true},{status:200})
}
else{
    return NextResponse.json({result:"User not deteted, please check your internal error",success:false},{status:400})
}
}
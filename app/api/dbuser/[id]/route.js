import { NextResponse } from "next/server";
import { user } from "../../util/db";

export function GET(request,content){
    const userId=content.params.id;
    const data=user.filter((item)=>item.id==userId);
    return NextResponse.json(data.length!=0?data:{page:"404",responce:"page not found"},{status:404},{status:200})
}
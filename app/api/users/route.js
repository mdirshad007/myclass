import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json({
        name:"irshad",
        job:"Web developer",
        age:30,
        city:"Delhi",
    },{status:200})
}
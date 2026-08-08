import {NextResponse, NextRequest} from "next/server";
import {prisma} from "@/lib/prisma";


export async function GET(
req:NextRequest,
{params}:{params:Promise<{id:string}>}
){
const {id} = await params;

const applications =
await prisma.application.findMany({

where:{
jobId:id
},


include:{


candidate:true


}


});



return NextResponse.json(applications);


}
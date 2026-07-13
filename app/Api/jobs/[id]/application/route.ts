import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";


export async function GET(
req:Request,
{params}:{params:{id:string}}
){


const applications =
await prisma.application.findMany({

where:{
jobId:params.id
},


include:{


candidate:true


}


});



return NextResponse.json(applications);


}
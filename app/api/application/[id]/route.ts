import {NextResponse, NextRequest} from "next/server";
import {prisma} from "@/lib/prisma";


export async function PUT(

req:NextRequest,

{params}:{params:Promise<{id:string}>}

){
const {id} = await params;

const {status}=await req.json();



const updated =
await prisma.application.update({

where:{
id
},


data:{
status
}


});



return NextResponse.json(updated);


}
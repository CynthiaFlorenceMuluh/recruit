import { NextResponse, NextRequest} from "next/server";
import { prisma } from "@/lib/prisma";


export async function PUT(
req:NextRequest,
{params}:{params:Promise<{id:string}>}
){

 const {id }= await params;

 const data = await req.json();


 const updatedJob = await prisma.job.update({

  where:{
    id
  },

  data:{
    title:data.title,
    description:data.description,
    location:data.location,
    jobType:data.jobType,
    salaryRange:data.salaryRange,
  }

 });


 return NextResponse.json(updatedJob);

}
export async function DELETE(
req:NextRequest,
{params}:{params:Promise<{id:string}>}
){

 const {id} = await params;

 const job = await prisma.job.delete({

  where:{
    id
  }

 });


 return NextResponse.json({
  message:"Job deleted",
  job
 });

}

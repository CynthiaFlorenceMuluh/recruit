import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function PUT(
req:Request,
{params}:{params:{id:string}}
){

 const id = params.id;

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
req:Request,
{params}:{params:{id:string}}
){

 const job = await prisma.job.delete({

  where:{
    id:params.id
  }

 });


 return NextResponse.json({
  message:"Job deleted",
  job
 });

}

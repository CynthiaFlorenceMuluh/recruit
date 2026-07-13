import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {auth} from "@/lib/auth";


export async function POST(req:Request){

try{


const session = await auth();


if(!session?.user?.id){

return NextResponse.json(
{
error:"Login required"
},
{
status:401
}
);

}



const {jobId}=await req.json();

const candidate = await prisma.candidateProfile.findUnique({
  where:{
    userId: session.user.id
  }
});
if(!candidate){
      return NextResponse.json(
        {error:"Candidate profile not found"},
        {status:404}
      );
    
    }


const application = await prisma.application.create({

data:{

jobId,

candidateId:candidate.id,

status:"pending"

}

});



return NextResponse.json(application);


}catch(error){

console.log(error);


return NextResponse.json(
{
error:"Application failed"
},
{
status:500
}
);

}

}
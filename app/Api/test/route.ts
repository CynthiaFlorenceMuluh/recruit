import { auth } from "@/lib/auth";
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
  const session = await auth();

  return NextResponse.json(session);
}

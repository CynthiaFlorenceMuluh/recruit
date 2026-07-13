import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

export async function authenticateUser(
  email: string,
  password: string
) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
    };
  } catch (error) {
    console.error("Authentication error:", error);
    return null;
  }
}

export async function createUser(
  email: string,
  password: string,
  fullName: string,
  role: "candidate" | "recruiter" | "admin"
) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        role,
      },
    });

    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
    };
  } catch (error) {
    console.error("User creation error:", error);
    throw error;
  }
}
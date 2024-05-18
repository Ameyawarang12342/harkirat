import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
interface IUser {
  username: string;
  password: string;
  name: string;
}

export async function createUser(
  username: string,
  password: string,
  name: string
): Promise<IUser> {
  const createdUser = await prisma.user.create({
    data: {
      username,
      password,
      name,
    },
  });

  return {
    username: createdUser.username,
    password: createdUser.password,
    name: createdUser.name,
  };
}

export async function getUser(userId: number): Promise<IUser | null> {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return null;
  }

  return {
    username: user.username,
    password: user.password,
    name: user.name,
  };
}

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Insert
async function insertUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      email: true,
      password: true,
    },
  });
  console.log(res);
}
// insertUser("shiv2@gamail.com", "password2", "shiv", "sai");

// Update
interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  email: string,
  { firstName, lastName }: UpdateParams
) {
  prisma.user.update({
    where: { email },
    data: {
      firstName,
      lastName,
    },
  });
}

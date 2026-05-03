const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "abc@gmail.com",
      name: "Binh",
    },
  });
  console.log(user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

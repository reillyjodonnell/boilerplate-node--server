import 'dotenv/config';
import express from 'express';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const app = express();

  const port = process?.env?.['PORT'] ?? 3000;

  app.get('/', (req, res) => {
    res.send('Hello from TS & Express');
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'test@prisma.io',

      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  });
  console.log('BOOYAH');

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

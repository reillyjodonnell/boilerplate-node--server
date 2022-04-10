import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function server() {
  const app = express();
  const dbUrl: string | undefined = process?.env?.['DATABASE_URL'];
  const secret: string | undefined = process?.env?.['TODAYS_SECRET'];
  const port: number | undefined = process?.env?.['PORT']
    ? parseInt(process?.env?.['PORT'])
    : 3000;
  const tenMinutes = 1000 * 60 * 10; // 10 min

  //Add this code
  if (!dbUrl) {
    console.warn('process.env.DATABASE_URL must be defined!');
    process.exit(1);
  }
  if (!secret) {
    console.warn('process.env.TODAYS_SECRET must be defined!');
    process.exit(1);
  }

  app.set('trust proxy', 1); // trust first proxy
  app.use(
    session({
      secret: secret!,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true, maxAge: tenMinutes, httpOnly: true },
    })
  );

  app.get('/', (req, res) => {
    res.send('Hello from TS & Express');
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'test@prisma.io',

  //     posts: {
  //       create: { title: 'Hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' },
  //     },
  //   },
  // });
  // console.log('BOOYAH');

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     Post: true,
  //     Profile: true,
  //   },
  // });
  // console.dir(allUsers, { depth: null });
}

server()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

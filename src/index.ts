import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import { PrismaClient } from '@prisma/client';
import path from 'path';
const prisma = new PrismaClient();

export default async function server() {
  const app = express();
  const isProd: boolean =
    process?.env?.['NODE_ENV'] === 'production' ? true : false;
  const dbUrl: string | undefined = process?.env?.['DATABASE_URL'];
  const secret: string | undefined = process?.env?.['TODAYS_SECRET'];
  const port: number | undefined = process?.env?.['PORT']
    ? parseInt(process?.env?.['PORT'])
    : 3000;

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
      //store: , currently the store is MemoryStore (dont use in prod)
      secret: secret,
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: isProd,
        httpOnly: true,
        maxAge: 1000 * 60 * 10, // 10 mins
      },
    })
  );
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.use(express.json());

  // We have to use this is form is submitted with HTML only
  // for parsing application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: false }));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html/'));
  });

  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/login.html/'));
  });

  app.post('/login', async (req, res) => {
    const email: string = req.body.email;

    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
        rejectOnNotFound: true,
      });
      console.log(user);
      res.json(user);
    } catch (error) {
      res.json({ error: `User not found` });
    }
  });

  app.listen(port, () => {
    console.log(`🚀 Server started at http://localhost:${port}`);
  });

  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'test@prisma.io',
  //     password: 'password',
  //   },
  // });
  // console.log('BOOYAH');

  // await prisma.user.delete({
  //   where: {
  //     email: 'alice@prisma.io',
  //   },
  // });

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

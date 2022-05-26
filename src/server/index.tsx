import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import { errorsConstants } from '~/server/constants/errorsConstants';
import * as ReactDOMServer from 'react-dom/server';
import { App } from '~/app/app';
import React from 'react';
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

  app.use(express.json());

  // We have to use this if form is submitted with HTML only
  // for parsing application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

  app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '..', 'public/index.html'));
    const app = ReactDOMServer.renderToString(<App />);

    const html = `
        <html lang="en">
        <head>
            <script src="app.js" defer></script>
        </head>
        <body>
            <div id="root">${app}</div>
            <p> Application is rendered above with CSR 🔥🔥 🔥</p>
        </body>
        </html>
    `;
    res.send(html);
  });

  app.use(express.static('./dist'));

  app.get('/login', (req, res) => {
    console.log('At login');
    res.sendFile(path.join(__dirname, '..', 'public/login.html'));
  });

  app.post('/login', async (req, res) => {
    const email = req.body.email;

    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
        rejectOnNotFound: true,
      });
      res.json(user);
    } catch (error: any) {
      res
        .status(errorsConstants.NOT_FOUND_STATUS_CODE)
        .json({ error: errorsConstants.INVALID_USERNAME_OR_PASSWORD });
    }
  });

  // app.use(express.static(path.join(__dirname, '..', 'public')));

  app.listen(port, () => {
    console.log(`🚀 Server started at http://localhost:${port}!`);
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

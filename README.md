<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/reillyjodonnell/boilerplate-node-server">
    
  </a>

  <h3 align="center">Boilerplate Node Server 🦾</h3>

  <p align="center">
    I'm tired of setting up the same boilerplate code
    <br />
    <a href="https://github.com/reillyjodonnell/boilerplate-node-server"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/reillyjodonnell/boilerplate-node-server">View Code</a>
    ·
    <a href="https://github.com/reillyjodonnell/boilerplate-node-server/issues">Report Bug</a>
    ·
    <a href="https://github.com/reillyjodonnell/boilerplate-node-server/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">🙋‍♂️ About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## 🙋‍♂️ About The Project

I know what features I wanted my Node/Express server to have:

- Auth (cookies bc JWTs suck)
- Postgres
- Prisma
- TypeScript

& wanted to be able to clone this repo everytime I start a new project.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://typescriptlang.org/)
- [Prisma](https://prisma.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 🔥 Getting Started

Super easy set up. follow these steps below ⬇

### Prereqs

1️⃣ You need to have Node 0.10 or higher to run everything. If you don't need a specific version of node just install the latest using the below command.

- npm
  ```sh
  npm install npm@latest -g
  ```
  _Don't have npm? Read their docs here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm._
  <br/>

2️⃣ Postgres Server

- A postgres server running

_Don't have one running?
Check out Railway and you can set one up in less than 10 seconds. It's magic 🎆 https://railway.app_

### Installation

_Setup is super easy._

1. Clone the repo
   ```sh
   git clone https://github.com/reillyjodonnell/boilerplate-node-server
   ```
2. Install Yarn packages
   ```sh
   yarn
   ```
3. Create an .env file and set the Postgres conneciton url to the following variable
   ```js
   DATABASE_URL =
     'postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## 🌎 Roadmap

- [x] Add basic readme
- [ ] Setup basic auth with cookies
- [ ] Add Additional readme sections
- [ ] Add additional features as needed

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 💖 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/yourAwesomeFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## ⚖ License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## 📱 Contact

Reilly - [@reillyjodonnell](https://twitter.com/reillyjodonnell)

Project Link: [https://github.com/reillyjodonnell/boilerplate-node-server](https://github.com/reillyjodonnell/boilerplate-node-server)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

I completely stand on the shoulders of giants

- [Express](https://expressjs.com)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## FAQS

Random shit I've thought of that I want to remind future me

- I updated the prisma schema why isn't it updating?
  -- Be sure to run

```sh
  yarn prisma-update
```

<p align="right">(<a href="#top">back to top</a>)</p>

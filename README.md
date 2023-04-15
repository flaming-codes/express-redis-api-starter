# Quickstart for Express.js / TypeScript / Redis / Lando

## Overview

- 🚀 Express.js w/ Typescript
- 📁 File-based routing for Express.js
- 🔍 `ts-node` for dev & production, no explicit compilation required
- 🐳 Lando for easy local development environment
- 🗄️ Redis for data storage


## About

This is a quickstart for a NodeJS / Express.js / TypeScript / Redis / Lando project. It is intended to be used as a starting point for new small projects that want to quickly get up and running with a basic API to access a Redis database.

It exposes a single endpoint (`/v1/page/[slug]/count`) to INCR a counter for a given slug, By default, the count expires after 4 hours. The API therefore enables simple trending statistics for your pages.

It uses _Lando_ to provide a local development environment that can be started with a single command, `lando start`.

_Express.js_ is used with _TypeScript_ and a file-based routing system. This means that you can add new routes by simply adding a new file to the `src/routes` directory. The file name will be used as the route name, and the file contents will be used as the route handler - similar to popular frameworks like _Next.js_.

## Getting Started

### Prerequisites

- [ ] [Lando](https://docs.devwithlando.io/installation/installing.html)
- [ ] [Docker (installed w/Lando if not present)](https://docs.docker.com/install/)

#### Optional

- [ ] [VSCode](https://code.visualstudio.com/download)
- [ ] [Node.js 19](https://nodejs.org/en/download/)

### Clone the repository

```bash
git clone
```

### Start the local development environment

```bash
lando start
```

> With Lando (and therefore, Docker) you don't need to install any dependencies on your local machine. Everything is installed and run inside a container. Therefore, you can start developing right away with a single command.

### (Optional) Update versions

#### Redis

Currently using Redis 7. Update the version of Redis in the `.lando.yml` file. You can find the latest version [here](https://docs.lando.dev/redis/).

#### Node.js

Currently using Node.js 19. Update the version of Node.js in the `.lando.yml` file and the `.nvmrc`. You can find the latest version [here](https://docs.lando.dev/node/).

### Access the API

The API is available at the following URL thanks to Lando's built-in proxy:

```bash
http://express-redis-api-starter.lndo.site:8000/...
```

You can send a GET/POST/DELETE request to the following endpoint to increment the ephemeral counter for a `slug`:

```bash
http://express-redis-api-starter.lndo.site:8000/v1/page/[slug]/count
```

> Run `lando info` to see the full list of URLs.

## Helpful Commands

### Lando

#### Access and follow logs of `api`-service

```bash
lando logs -s api -t -f
```

### Local Development

You can still use a local development environment without Lando. This is useful if you want to use your own local development environment, or if you want to run the project in production. For a hybrid approach, you can run the following command to start the server directly and not within the container:

```bash
npm run local-dev
```

#### Start the production server locally:

```bash
npm run local-start
```

## Copyright

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details and maintained by [flaming.codes](https://flaming.codes).

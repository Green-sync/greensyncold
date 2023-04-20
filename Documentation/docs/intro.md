---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **GreenSync in less than 5 minutes**.

## Getting Started

Get started by **Setting up your development environment**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- [PNPM](https://pnpm.io/installation) version 6 or above. pnpm manages the workspace for the entire application hence the need to install it.

## Development

Run:

```bash
git clone https://github.com/green-sync/greensync.git

cd greensync

# run this command once when you clone the repository for the first time
node init.js

# do this the first time you clone the repository
.env.example > .env
```

if all goes well you will see develpment servers starting up as follows.

- Client application running on [http://localhost:4300](localhost:4300)
- Server application running on [http://localhost:5001](localhost:4000)
- Documentation application running on [http://localhost:4100](localhost:4100)

## Essential scripts

### Start all applications

you can start all applications at once by running this command:

```bash
pnpm start
```

### Client application

you have access to the following CLI commands:

```bash

# start the server
pnpm client start

## install a package
pnpm client install [package]

#build the application

pnpm client build


```

### Server application

> IMPORTANT: Before running these scripts, ensure that you have set the `APP_ID` environmental variable in the `.env` file. You can find a sample env file in the application at `.env.example`.

```bash

# start the server
pnpm api dev

## install a package
pnpm api install [package]

#build the application

pnpm api build


```

### Documentation Site

you have access to the following CLI commands:

```bash

# start the server
pnpm doc start

## install a package
pnpm doc install [package]

#build the application

pnpm doc build

## deploy to github pages - this requires authentication hence the GIT_USER flag
 GIT_USER:<USER_NAME> pnpm doc pages

```

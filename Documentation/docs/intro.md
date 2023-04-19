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
- [PNPM](https://pnpm.org) version 6 or above. pnpm manages the workspace for the entire application hence the need to install it. you dont have to install it manually, there is a script -`init.js` which manages that process for you in project.

## Development

Run:

```bash
git clone https://github.com/green-sync/greensync.git

cd greensync

# run this command once when you clone the repository for the first time
node init.js
```

if all goes well you will see develpment servers starting up as follows.

- Client application running on [http://localhost4300](localhost:4300)
- Server application running on [http://localhost4000](localhost:4000)
- Documentation application running on [http://localhost4100](localhost:4100)

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

you have access to the following CLI commands:

```bash

# start the server
pnpm server start

## install a package
pnpm server install [package]

#build the application

pnpm server build


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

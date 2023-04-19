---
title: Server Application
sidebar_position: 3
---

## Introduction

Welcome to our project! Our project is a serverless GraphQL API built on top of Firebase Functions using the popular Apollo Server library. The API provides a flexible data model and a set of powerful features that enable clients to interact with the data in meaningful ways.

We have organized our project in a clean and orderly manner, utilizing a high-level folder structure that separates our code into logical groups:

```bash
├── firebase.json
├── index.js
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── resolvers.js
│   ├── schema.js
│   └── utils
│       └── config.js
└── tree.md

```

- `firebase.json` : Configuration file for Firebase services
- `index.js` : Entry point for the serverless application
- `package.json` : Dependency file for Node.js packages
- `pnpm-lock.yaml` : Lock file for pnpm , our package manager of choice
- `src` : Directory for our source code, containing:
- `resolvers`.js : Implementations for the GraphQL resolvers
- `schema.js` : The GraphQL schema definition
- `utils` : A set of utility functions to support the application, containing:
- `config.js` : A configuration module for environment variables.

Our project is documented in a structured manner, using the tree.md file to represent the high-level folder structure of our project. We believe that clean and organized code, along with comprehensive documentation, is key to building a robust and scalable application.

Thank you for choosing our project and we hope that you enjoy working with it!

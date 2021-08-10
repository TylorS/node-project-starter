# Node Project Template

This repository is a simple, somewhat opinionated setup for a node project of pretty much any kind.

## Features

- [TypeScript](https://www.typescriptlang.org/)
  - Targets ES2019 by default
- [Mocha](https://mochajs.org/)
  - Compiled with [ESBuild](https://esbuild.github.io/)
  - Supports [TSConfig Paths](https://www.typescriptlang.org/tsconfig#paths)
  - Code Coverage via [c8](https://github.com/bcoe/c8)
- [Eslint](https://eslint.org/) w/ [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky) + [Lint-staged](https://github.com/okonet/lint-staged)
- Minimal [CircleCI](https://circleci.com/) Configuration

## Setup

One time setup:

1. Verify that you have `nvm` installed in your device: `nvm ls`. If not,
   [follow these steps](https://github.com/nvm-sh/nvm#installing-and-updating)
2. Clone & `cd` into the repo
3. Use the project version of Node: `nvm use`.
   [For more information about releases](https://nodejs.org/en/about/releases/)
4. `npm install`

# pf-connector-fintoc-api-node

Personal Finance: Connector Fintoc API Node.

## References

### Github

https://github.com/mrturo/pf-connector-fintoc-api-node.git

## Starting

`git clone git@github.com:mrturo/pf-connector-fintoc-api-node.git`

## Pre-requirements

It can be done in two ways:

- Through Docker, for this, you must install Docker Desktop following these [steps](https://www.docker.com/get-started/).

- Running directly on your computer, you must install:
  - NodeJs: https://nodejs.org/en/

## Installation

- With Docker:

  - Up image: `npm run docker:start`
  - Down image: `npm run docker:stop`
  - Restart image: `npm run docker:restart`

- Running on your computer:

  - Build executables: `npm run install-build`
  - Run in production: `npm start`
  - Run while developing: `npm run start:dev`

## API Documentation

http://localhost:3000/api-docs/

# Testing execution

## Unit test

> npm run test-coverage:unit

## Integration test

- With Docker:

  > npm run docker-test

- Running on your computer:

  > npm run test-coverage:complete

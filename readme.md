# Twobit Website

Build and run my twobit website.

## Frontend

Built with vitejs.

```sh
npm run build
```

## Server

Runs on a minimal rust http service backend on port 80 by default.
Port can be adjusted by supplying the `PORT` environment variable.

## Docker

Build/run using docker

```sh
PORT=8080 docker run twobitint/twobit-website
```
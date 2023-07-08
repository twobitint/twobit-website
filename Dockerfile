# Build frontend assets
FROM node:18-alpine as assets
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Build http server
FROM rust:1.70.0 as server
WORKDIR /usr/src/app
COPY . .
RUN cargo build --release

# Serve website
FROM gcr.io/distroless/cc
COPY --from=assets /app/dist /dist
COPY --from=server /usr/src/app/target/release/twobit-website /
CMD ["./twobit-website"]
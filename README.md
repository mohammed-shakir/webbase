# WebBase

A reusable full-stack foundation for modern web platforms — featuring a starter SaaS dashboard

## Prerequisites

Before you begin, make sure the following tools are installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Google Cloud CLI (gcloud)](https://cloud.google.com/sdk)
- Environment variables (`.env` file) — see `.env.example`

## Getting Started

1. Development Mode

```bash
npm install
npm run dev
```

Visit http://localhost:3000 in your browser.

2. Production Mode

```bash
npm run build
npm run start
```

3. Docker (Full App) Run the full stack in detached mode:

```bash
docker-compose up --build -d
```

Or build and run the image manually:

```bash
docker build -t webbase .

docker run -p 3000:3000 \
  --env-file .env.production \
  webbase
```

## Database Setup

To run only the PostgreSQL database container:

```bash
docker-compose up -d db
```

## Prisma CLI

Manage your database and Prisma client with:

```bash
# Generate Prisma client
npx prisma generate

# Run migrations (development)
npx prisma migrate dev --name init

# Seed the database
npx prisma db seed

# Open Prisma Studio (GUI)
npx prisma studio
```

## Running Tests

TODO

## Deploying to GCP

TODO

## License

This project is licensed under the MIT License. See LICENSE for details.

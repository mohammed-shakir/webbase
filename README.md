# WebBase

A reusable full-stack foundation for modern web platforms — featuring a starter SaaS dashboard

## Prerequisites

Before you begin, make sure the following tools are installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
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

# Run migrations
npx dotenv -e .env.local -- npx prisma migrate dev --name init

# Seed the database
dotenv -e .env.local -- prisma db seed

# Open Prisma Studio (GUI)
npx prisma studio
```

## Running Tests

For unit tests and integration tests:

```bash
npm run test:unit-integration
```

For end-to-end tests:

```bash
npm run test:e2e
```

For all tests:

```bash
npm run test
```

## Linting and Formatting

For linting with next.js:

```bash
npm run lint
```

For linting with eslint:

```bash
npm run lint:eslint
```

For checking formatting with prettier:

```bash
npm run format:check
```

For formatting with prettier:

```bash
npm run format
```

## GCP

Ideas for things to add to the GCP project:

- IAM Roles – Access control
- Google Cloud Run – App hosting (frontend & backend)
- Google Cloud SQL – Managed PostgreSQL database
- Google Cloud Storage – File uploads and static assets
- Google Secret Manager – Secure environment variables
- Google Cloud Build – CI/CD automation
- Google Cloud Logging – Centralized logging
- Google Cloud Monitoring – App performance & uptime
- Google Analytics – Website traffic and usage stats

## License

This project is licensed under the MIT License. See LICENSE for details.

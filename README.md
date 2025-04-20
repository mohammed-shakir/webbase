## Getting Started

First, run the development server:

```bash
npm run dev
```

To run in production mode:

```bash
npm run build
npm run start
```

Run with Docker:

```bash
docker-compose up --build -d
```

or

```bash
docker build -t webbase .

docker run -p 3000:3000 \
  --env-file .env.production \
  webbase
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## DB
Run only db with docker:
```bash
docker-compose up -d db
```

Then run the app:
```bash
npm run dev
```

## Prisma
To run the Prisma migrations, use the following command:

```bash
# Create the database
docker-compose up -d

# Generate the client
docker-compose exec app npx prisma generate

# Create & apply your migration
docker-compose exec app npx prisma migrate dev --name init

# Seed your database
docker-compose exec app npx prisma db seed

```

## Prerequisites
- Node.js
- npm
- Docker
- Google Cloud CLI (gcloud)
- .env Files
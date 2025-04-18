## Getting Started

First, run the development server:

```bash
npm run dev
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

## Prerequisites
- Node.js >= 18
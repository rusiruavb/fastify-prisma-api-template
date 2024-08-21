# Post API Service

This is a simple API service for managing posts and users, built with Fastify and Prisma.

### Prerequisites

- Node.js
- Fastify
- PNPM
- Prisma

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd post-api-service
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Set up the environment variables:

   ```sh
   cp .env.example .env
   ```

4. Run the migrations:
   ```sh
   pnpm prisma migrate dev
   ```

### Running the Application

#### Development

To start the application in development mode:

```
pnpm run dev
```

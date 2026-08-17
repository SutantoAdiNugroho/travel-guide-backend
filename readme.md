# Travel Guide Backend with Prisma - Specialized App Development Assignment

Backend untuk aplikasi Travel Guide, menggunakan Prisma ORM, PostgreSQL, Express, dan JWT. Menyediakan 4 fitur: registrasi, login, daftar destinasi, dan detail destinasi termasuk video YouTube yang disimpan di database.

## Persyaratan
- Node.js v14+
- PostgreSQL v12+

## Instalasi
1. Clone repositori
2. `npm install`
3. Buat file `.env` dengan DATABASE_URL dan JWT_SECRET
4. `npx prisma migrate dev --name init`
5. `node prisma/seed.js` (opsional, untuk data awal)
6. `npm run dev`

## Endpoint
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/destinations` (auth required)
- `GET /api/destinations/:id` (auth required)

## Struktur
- `prisma/schema.prisma` – model data
- `src/controllers` – logika bisnis
- `src/routes` – routing
- `src/middleware` – auth & error handler

## Teknologi
- Prisma ORM
- Express.js
- PostgreSQL
- JWT & bcryptjs

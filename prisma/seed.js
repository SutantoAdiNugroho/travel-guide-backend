const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.destination.createMany({
    data: [
      { name: 'Bali', location: 'Bali', imageUrl: 'https://example.com/bali.jpg', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', shortDescription: 'Pulau Dewata', description: 'Deskripsi Bali...', category: 'Pantai', culinary: 'Babiguling', accommodation: 'Villa', culture: 'Tari Kecak' },
      { name: 'Yogyakarta', location: 'Yogyakarta', imageUrl: 'https://example.com/jogja.jpg', videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ', shortDescription: 'Kota Budaya', description: 'Deskripsi Jogja...', category: 'Sejarah', culinary: 'Gudeg', accommodation: 'Hotel', culture: 'Keraton' },
      { name: 'Raja Ampat', location: 'Papua Barat', imageUrl: 'https://example.com/rajaampat.jpg', videoUrl: 'https://www.youtube.com/embed/8Dx1Vx6kUuI', shortDescription: 'Surga Bawah Laut', description: 'Deskripsi Raja Ampat...', category: 'Pantai', culinary: 'Ikan bakar', accommodation: 'Resort', culture: 'Budaya Papua' },
      { name: 'Tana Toraja', location: 'Sulawesi Selatan', imageUrl: 'https://example.com/toraja.jpg', videoUrl: 'https://www.youtube.com/embed/5XgC0uYHtgU', shortDescription: 'Kebudayaan Unik', description: 'Deskripsi Toraja...', category: 'Gunung', culinary: 'Pork', accommodation: 'Homestay', culture: 'Rambu Solo' },
      { name: 'Komodo', location: 'NTT', imageUrl: 'https://example.com/komodo.jpg', videoUrl: 'https://www.youtube.com/embed/9pV-0Yz9f3w', shortDescription: 'Naga Purba', description: 'Deskripsi Komodo...', category: 'Pulau', culinary: 'Seafood', accommodation: 'Kapal', culture: 'Komodo Dragon' }
    ]
  });
  console.log('Seed data inserted');
}

main().catch(e => console.error(e)).finally(async () => await prisma.$disconnect());
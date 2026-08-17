const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Memulai seeding data...');

  // 1. Buat akun pengguna (admin dan user biasa)
  const usersData = [
    {
      email: 'admin@travel.com',
      password: 'admin123',
      fullName: 'Admin Travel Guide',
    },
    {
      email: 'user@test.com',
      password: 'user123',
      fullName: 'User Testing',
    },
  ];

  for (const user of usersData) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.upsert({
      where: { email: user.email },
      update: {
        passwordHash: hashedPassword, // Update password jika email sudah ada
        fullName: user.fullName,
      },
      create: {
        email: user.email,
        passwordHash: hashedPassword,
        fullName: user.fullName,
      },
    });
    console.log(`✅ Akun ${user.email} berhasil dibuat/diperbarui.`);
  }

  // 2. Buat data destinasi (tetap sama seperti sebelumnya)
  const destinationsData = [
    {
      name: 'Bali',
      location: 'Bali',
      imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      shortDescription: 'Pulau Dewata dengan pantai dan budaya yang memukau.',
      description: 'Bali menawarkan keindahan alam, tari tradisional, dan keramahan masyarakatnya.',
      category: 'Pantai',
      culinary: 'Babiguling, Sate Lilit',
      accommodation: 'Villa, Resort',
      culture: 'Tari Kecak, Ngaben',
    },
    {
      name: 'Yogyakarta',
      location: 'Yogyakarta',
      imageUrl: 'https://images.unsplash.com/photo-1542664473-3345f383f90c?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
      shortDescription: 'Kota pelajar dengan kekayaan sejarah dan budaya.',
      description: 'Jogja identik dengan Keraton, Candi Borobudur, dan Prambanan.',
      category: 'Sejarah',
      culinary: 'Gudeg, Nasi Kucing',
      accommodation: 'Hotel, Homestay',
      culture: 'Wayang Kulit, Keraton',
    },
    {
      name: 'Raja Ampat',
      location: 'Papua Barat',
      imageUrl: 'https://images.unsplash.com/photo-1590564631223-027c4c6869f8?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/8Dx1Vx6kUuI',
      shortDescription: 'Surga bawah laut dengan keanekaragaman hayati terbaik di dunia.',
      description: 'Raja Ampat memiliki gugusan pulau karst dan terumbu karang yang luar biasa.',
      category: 'Pulau',
      culinary: 'Ikan bakar, Papeda',
      accommodation: 'Resort, Kapal',
      culture: 'Suku Asmat, Tarian perang',
    },
    {
      name: 'Tana Toraja',
      location: 'Sulawesi Selatan',
      imageUrl: 'https://images.unsplash.com/photo-1572481652751-0b0c31b77994?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/5XgC0uYHtgU',
      shortDescription: 'Kebudayaan unik dengan upacara pemakaman adat yang megah.',
      description: 'Toraja terkenal dengan rumah adat Tongkonan dan ritual Rambu Solo.',
      category: 'Gunung',
      culinary: 'Pork (Babi), Pa’piong',
      accommodation: 'Homestay, Hotel',
      culture: 'Rambu Solo, Ma’nene',
    },
    {
      name: 'Komodo',
      location: 'NTT',
      imageUrl: 'https://images.unsplash.com/photo-1562606903-842f5b14c059?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/9pV-0Yz9f3w',
      shortDescription: 'Habitat asli komodo, naga purba yang hanya ada di Indonesia.',
      description: 'Taman Nasional Komodo menyajikan pemandangan savana dan hewan purba.',
      category: 'Pulau',
      culinary: 'Seafood, Ikan Bakar',
      accommodation: 'Kapal, Resort',
      culture: 'Komodo Dragon, Alor',
    },
  ];

  // Gunakan createMany dengan skipDuplicates agar tidak error jika seed dijalankan ulang
  await prisma.destination.createMany({
    data: destinationsData,
    skipDuplicates: true,
  });
  console.log('✅ Data destinasi berhasil ditambahkan.');

  console.log('🎉 Seeding selesai!');
}

main()
  .catch((e) => {
    console.error('❌ Error saat seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
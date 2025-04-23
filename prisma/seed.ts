// prisma/seed.ts
import { PrismaClient, Role } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // 1. Ensure a default Team exists
  const team = await prisma.team.upsert({
    where: { name: 'Acme Corp' },
    update: {},
    create: { name: 'Acme Corp' },
  });

  // 2. Ensure an Admin user exists
  const admin = await prisma.user.upsert({
    where: { email: 'admin@acme.com' },
    update: {},
    create: { email: 'admin@acme.com', name: 'Acme Admin' },
  });

  // 3. Link the Admin to the Team as OWNER
  await prisma.teamMember.upsert({
    where: {
      userId_teamId: { userId: admin.id, teamId: team.id },
    },
    update: { role: Role.OWNER },
    create: {
      userId: admin.id,
      teamId: team.id,
      role: Role.OWNER,
    },
  });

  // 4. Add a couple of announcements
  await prisma.announcement.createMany({
    skipDuplicates: true,
    data: [
      {
        title: 'Welcome to WebBase!',
        body: 'This is the first announcement.',
      },
      {
        title: 'New Features',
        body: 'Working on xyz',
      },
    ],
  });

  console.log('Seeded initial data.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

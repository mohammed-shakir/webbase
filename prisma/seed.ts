import { PrismaClient, Role } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const team = await prisma.team.upsert({
    where: { name: 'Acme Corp' },
    update: {},
    create: { name: 'Acme Corp' },
  });

  const admin = await prisma.user.upsert({
    where: { email: 'admin@acme.com' },
    update: {},
    create: { email: 'admin@acme.com', name: 'Acme Admin' },
  });

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

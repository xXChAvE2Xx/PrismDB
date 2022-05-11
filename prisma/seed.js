const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    /*const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });*/


    const registro1 = await prisma.explorador.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Raul Chavez',
            lang: 'Spanish',
            missionCommander: 'Carlo', 
            enrollments: 4,
            hasCertifications: true            
        }
    });

    const registro2 = await prisma.explorador.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'Hiromi Chavez',
            lang: 'Spanish',
            missionCommander: 'Marco Polo', 
            enrollments: 2,
            hasCertifications: false            
        }
    });

    const registro3 = await prisma.explorador.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: 'Miguel Chavez',
            lang: 'Spanish',
            missionCommander: 'Rogelio', 
            enrollments: 14,
            hasCertifications: false            
        }
    });


    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
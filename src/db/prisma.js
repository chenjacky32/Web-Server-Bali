import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

// import { PrismaClient } from '@prisma/client';

// if (!global.prisma) {
//   global.prisma = new PrismaClient();
// }
// export default global.prisma;

export default prisma;

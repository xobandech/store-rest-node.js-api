const { PrismaClient } = require('@prisma/client')

const globalForPrisma = global as unknown as {
    prisma: typeof PrismaClient | undefined
}
 
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: ['query']
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
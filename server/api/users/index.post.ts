import { PrismaClient } from "@prisma/client"
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    let user = null

    bcrypt.hash('Polska123', 11, async (err: any, hash: any) => {
        user = await prisma.user.create({
            data: {
                email: 'lukasion@gmail.com',
                name: 'lukasion',
                password: hash
            }
        })
    })

    return {
        user: user
    }
})
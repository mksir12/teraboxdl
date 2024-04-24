import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient()

export async function getfeed(){
    let response = await prisma.video.findMany({
        take: 100,
        orderBy: {
            updated_at: "desc"
        }
    })
    return response
}
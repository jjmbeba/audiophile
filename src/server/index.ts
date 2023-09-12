import prisma from "@/prisma";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    getAllProducts:publicProcedure.query(async() => {
        return await prisma.products.findMany();
    }),
    getHeadphones:publicProcedure.query(async() => {
        return await prisma.products.findMany({
            where:{
                category:{
                    equals:'headphones'
                }
            }
        })
    })
})

export type AppRouter = typeof appRouter
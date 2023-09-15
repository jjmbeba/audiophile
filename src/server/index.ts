import prisma from "@/prisma";
import { publicProcedure, router } from "./trpc";
import {z} from 'zod'

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
    }),
    getHeadphoneBySlug:publicProcedure.input(z.string()).query(async(opts) => {
        const {input} = opts;

        return await prisma.products.findFirst({
            where:{
                slug:input
            }
        })
    }),
    getSpeakers:publicProcedure.query(async() => {
        return await prisma.products.findMany({
            where:{
                category:{
                    equals:'speakers'
                }
            }
        })
    }),
    getEarphones:publicProcedure.query(async() => {
        return await prisma.products.findMany({
            where:{
                category:{
                    equals:'earphones'
                }
            }
        })
    }),
})

export type AppRouter = typeof appRouter
import prisma from "@/prisma";
import { publicProcedure, router } from "./trpc";
import {z} from 'zod'
import axios from 'axios'

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
    getProductBySlug:publicProcedure.input(z.string()).query(async(opts) => {
        const {input} = opts;

        return await prisma.products.findFirst({
            where:{
                slug:input
            }
        })
    }),
    getProductById:publicProcedure.input(z.string()).query(async(opts) => {
        const {input} = opts;

        return await prisma.products.findUnique({
            where:{
                id:input
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
    getAllCountries:publicProcedure.query(async() => {
        const countries:Territory[] = await axios.get(`https://restcountries.com/v3.1/all`).then((response) => response.data).catch((error) => {
            throw new Error(error)
        })

        return countries;
    })
})

export type AppRouter = typeof appRouter
import { httpBatchLink } from '@trpc/client';
import { appRouter } from '@/src/server';

export const serverClient = appRouter.createCaller({
    links:[
        httpBatchLink({
            url:`${process.env.NEXT_URL}/api/trpc`
        })
    ]
})
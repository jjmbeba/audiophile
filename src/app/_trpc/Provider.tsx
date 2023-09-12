'use client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {httpBatchLink} from '@trpc/client'
import React,{useState} from 'react';

import { trpc } from './client';

type Props = {
    children:React.ReactNode
}

const Provider = ({children}:Props) => {

    const [queryClient] = useState(() => new QueryClient({}))
    const [trpcClient] = useState(() => trpc.createClient({
        links:[
            httpBatchLink({
                url:`${process.env.NEXT_URL}/api/trpc`
            })
        ]
    }))

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}

export default Provider
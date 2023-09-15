import { serverClient } from '@/src/app/_trpc/serverClient';
import GoBackButton from '@/src/components/GoBackButton';
import SpecificProductCard from '@/src/components/SpecificProductCard';
import Image from 'next/image';
import React from 'react'

type Props = {
    params:{
        slug:string;
    }
}

const page = async ({params}: Props) => {

    const product = await serverClient.getHeadphoneBySlug(params.slug)
    console.log(product)

    if(!product) return;

  return (
    <div className='px-6 pt-4 py-[10.75rem]'>
        <GoBackButton/>
        <div>
          <SpecificProductCard id={product.id} name={product.name} images={product.image} description={product.description} price={product.price}/>
        </div>
    </div>
  )
}

export default page
import CheckoutForm from '@/src/components/CheckoutForm'
import GoBackButton from '@/src/components/GoBackButton'
import Header from '@/src/components/Header'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Header className='bg-black'/>
        <div className='px-6 mt-4 mb-[8.09rem]'>
        <GoBackButton/>
        <CheckoutForm/>
        </div>
    </div>
  )
}

export default page
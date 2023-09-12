import React from 'react'

type Props = {
    title:string;
}

const ProductTitle = ({title}: Props) => {
  return (
    <div className='py-8 md:py-24 px-[5.25rem] md:px-[15rem] bg-black text-white text-[1.75rem] md:text-[2.5rem] leading-[0.125rem] md:leading-[2.75rem] md:tracking-[0.08931rem] font-bold uppercase text-center'>
        {title}
    </div>
  )
}

export default ProductTitle
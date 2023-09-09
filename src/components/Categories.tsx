import React from 'react'
import Headphones from "@/public/shared/desktop/image-category-thumbnail-headphones.png";
import Earphones from "@/public/shared/desktop/image-category-thumbnail-earphones.png";
import Speakers from "@/public/shared/desktop/image-category-thumbnail-speakers.png";
import CategoryCard from './CategoryCard';


type Props = {}

const Categories = (props: Props) => {
  return (
    <div className='pt-[5.75rem] md:pt-[9.25rem] lg:pt-[12.5rem] px-6 md:px-10 lg:px-[10.3rem] pb-[7.2rem] md:pb-24 lg:pb-[10.5rem] flex flex-col md:flex-row gap-[4.25rem] md:gap-[0.62rem] lg:gap-[1.88rem]'>
        <CategoryCard name='headphones' src={Headphones} link={'/product/headphones'}/>
        <CategoryCard name='speakers' src={Speakers} link={'/product/speakers'}/>
        <CategoryCard name='earphones' src={Earphones} link={'/product/earphones'}/>
    </div>
  )
}

export default Categories
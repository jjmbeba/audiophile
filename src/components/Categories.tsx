import React,{HTMLProps} from 'react'
import Headphones from "@/public/shared/desktop/image-category-thumbnail-headphones.png";
import Earphones from "@/public/shared/desktop/image-category-thumbnail-earphones.png";
import Speakers from "@/public/shared/desktop/image-category-thumbnail-speakers.png";
import CategoryCard from './CategoryCard';
import { cn } from '../lib/utils';


interface Props extends HTMLProps<HTMLDivElement> {}

const Categories = ({className}: Props) => {
  return (
    <div className={cn(`pt-[5.75rem] md:pt-[9.25rem] lg:pt-[12.5rem] px-6 md:px-10 lg:px-[10.3rem] pb-[7.2rem] md:pb-24 lg:pb-[10.5rem] flex flex-col md:flex-row gap-[4.25rem] md:gap-[0.62rem] lg:gap-[1.88rem] ${className}`)}>
        <CategoryCard name='headphones' src={Headphones} link={'/headphones'}/>
        <CategoryCard name='speakers' src={Speakers} link={'/speakers'}/>
        <CategoryCard name='earphones' src={Earphones} link={'/earphones'}/>
    </div>
  )
}

export default Categories
import React, { HTMLProps } from 'react'
import FacebookIcon from '@/public/shared/desktop/icon-facebook.svg'
import TwitterIcon from '@/public/shared/desktop/icon-twitter.svg'
import InstagramIcon from '@/public/shared/desktop/icon-instagram.svg'
import Image from 'next/image'
import { cn } from '../lib/utils'

interface Props extends HTMLProps<HTMLDivElement> {}

const SocialLinks = ({className}: Props) => {
  return (
    <div
    className={cn(`flex items-center justify-center gap-[16px] ${className}`)}
  >
    <Image className="w-[24px] h-[24px] cursor-pointer !hover:fill-[#D87D4A]" src={FacebookIcon} alt="facebook-icon" />
    <Image className="w-[24px] h-[24px] cursor-pointer !hover:fill-[#D87D4A]" src={TwitterIcon} alt="twitter-icon" />
    <Image className="w-[24px] h-[24px] cursor-pointer !hover:fill-[#D87D4A]" src={InstagramIcon} alt="instagram-icon" />
  </div>
  )
}

export default SocialLinks
'use client'

// Tools
import Image from "next/image"
import Link from "next/link"
import { SanityDocument } from "next-sanity"

// Types
import { NavObject } from "@/sanity/types"
import { Navigation } from "@/sanity/types"

// Components
import Logo from '@/public/logo.png'
import Nav from "@/components/navigation"

interface HeaderProps {
  items: Navigation
}


const Header: React.FC<HeaderProps> = ({
  items
}) => {

  console.log('header', items)

  return (
    <header className='w-full flex justify-center'>
      <div className='flex flex-col items-center w-full max-w-6xl xl:max-w-8xl'>
        <Link href='/'>
          <Image src={Logo} alt='Logo' width={190} height={190} />
        </Link>
        <Nav data={items} />
      </div>
    </header>
  )
}

export default Header
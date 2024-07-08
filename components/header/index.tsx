'use client'

// Tools
import Image from "next/image"
import Link from "next/link"
import { SanityDocument } from "next-sanity"

// Types
import { NavigationType } from "@/types/documents/navigation-type"

// Components
import Logo from '@/public/logo.png'
import Nav from "@/components/navigation"

interface HeaderProps {
  items: NavigationType
}


const Header: React.FC<HeaderProps> = ({
  items
}) => {

  return (
    <header className='w-full flex justify-center'>
      <div className={`flex ${items ? 'justify-between pr-5 lg:pr-10' : 'justify-center'} w-full max-w-6xl xl:max-w-8xl`}>
        <Link href='/'>
          <Image src={Logo} alt='Logo' width={190} height={190} />
        </Link>
       {items && (
         <Nav data={items} />
       )}
      </div>
    </header>
  )
}

export default Header
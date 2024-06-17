'use client'
import Image from 'next/image'
import Logo from '@/public/spotlight.png'

const SpotlightLogo = () => {
	return <Image src={Logo.src} alt='Spotlight' width={24} height={24} />
}

export default SpotlightLogo

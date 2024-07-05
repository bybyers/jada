'use client'

// Tools
import { SanityDocument } from "next-sanity"
import Image from "next/image"

// Types
import { Navigation } from "@/sanity/types"

interface NavProps {
  data: Navigation
}

const Nav: React.FC<NavProps> = ({
  data
}) => {

  console.log('nav', data)

  return (
    <div>
      {data.title}
    </div>
  )
}

export default Nav
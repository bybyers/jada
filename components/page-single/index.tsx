// Tools
import { SanityDocument } from "next-sanity"

// Components
import Header from "@/components/header"
import Sections from "@/components/sections"



export default function Page({ page }: { page: SanityDocument }) {
  const { pageNav, sections } = page

  return (
    <>
      <Header items={pageNav?.header} />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Sections body={sections} />
      </main>
    </>
  )
}
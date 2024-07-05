// Tools
import { SanityDocument } from "next-sanity"

// Components
import Sections from "../sections"



export default function Page({ page }: { page: SanityDocument }) {
  const { title, mainImage, sections } = page

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sections body={sections} />
    </main>
  )
}
// Tools
import { SanityDocument } from "next-sanity"



export default function Page({ page }: { page: SanityDocument }) {
  const { title, mainImage, body } = page

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {title ? <h1>{title}</h1> : null}
    </main>
  )
}
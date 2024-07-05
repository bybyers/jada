// Tools
import { client } from '@/sanity/lib/client'

// Queries
import { PAGE_QUERY } from '@/sanity/queries/documents/page-query'

// Components



export default async function Home() {
  const page = await client.fetch(PAGE_QUERY, { slug: 'home' })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{page.title}</h1>
    </main>
  );
}

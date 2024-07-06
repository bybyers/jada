// Tools
import { SanityDocument } from "next-sanity"
import { sanityFetch } from "@/sanity/lib/fetch"

// Queries
import { PageQuery } from '@/sanity/queries/documents/page-query'

// Components
import Page from "@/components/page-single"



export default async function Home() {
  const page = await sanityFetch<SanityDocument>({
    query: PageQuery,
    params: { slug: "home" },
  })

  return (
    <Page page={page} /> 
  );
}

// Tools
import { SanityDocument } from "next-sanity"
import { sanityFetch } from "@/sanity/lib/fetch"

// Queries
import { PAGE_QUERY } from '@/sanity/queries/documents/page-query'

// Components
import Page from "@/components/page-single"



export default async function Home() {
  const page = await sanityFetch<SanityDocument>({
    query: PAGE_QUERY,
    params: { slug: "home" },
  })

  return (
    <Page page={page} /> 
  );
}

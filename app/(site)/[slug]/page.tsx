// Tools
import { QueryParams, SanityDocument } from "next-sanity"
import { sanityFetch } from "@/sanity/lib/fetch"
import { notFound } from "next/navigation"

// Queries
import { PagesQuery, PageQuery } from '@/sanity/queries/documents/page-query'

// Components
import Page from "@/components/page-single"


export async function generateStaticParams() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: PagesQuery,
    perspective: "published",
    stega: false,
  })

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}



export default async function SinglePage({ params }: { params: QueryParams }) {
  const page = await sanityFetch<SanityDocument>({ query: PageQuery, params })

  if (!page) {
    return notFound()
  }

  return (
    <Page page={page} /> 
  );
}

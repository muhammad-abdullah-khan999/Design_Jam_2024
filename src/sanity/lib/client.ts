import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "nv6ah801",
  dataset: "production",
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
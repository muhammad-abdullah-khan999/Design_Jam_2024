import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId : "nv6ah801",
  dataset : "production",
  apiVersion : '2023-01-01',
  token : "skz70RHhEOwmFcKDiZmanBZrrPXQsY5tqFVChyvmwtmlXNjrqfCvMqj6UfZG8bYjcduasHBySPs9zt9k3V3zocDdLzjzdQnXNLIdaPfidjiT8azWlQZGWiKVJ36HGIicNduF440F6IPapX9oBHIMgiYBrHzIyCB3UQd607q7pB2LDgUKxrND" ,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

'use server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
export const getCategories = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const categories = await payload.find({
    collection: 'categories',
  })

  return categories
}

export const getSubcategories = async () => {
  const payload = await getPayload({
    config: configPromise,
  })
  const subcategories = await payload.find({
    collection: 'subcategories',
  })
  return subcategories
}

export const getProducts = async () => {
  const payload = await getPayload({
    config: configPromise,
  })
  const products = await payload.find({
    collection: 'products',
  })
  return products
}

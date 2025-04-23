'use client'

import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Product, Media, Category, Subcategory } from '@/payload-types'
import Link from 'next/link'

export type ProductWithRelations = Product & {
  media: Media
  mainCategory: Category
  subCategory: Subcategory
}

export default function Products({ products }: { products: ProductWithRelations[] }) {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('category')
  console.log(selectedCategory)

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        if (!selectedCategory) return true
        return product.mainCategory.title === selectedCategory
      }),
    [selectedCategory, products],
  )

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Products Grid */}

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Link href={`/products/${product.id}`}>
                  <div className="overflow-hidden group cursor-pointer bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.media.url!}
                        alt={product.title}
                        fill
                        className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm text-gray-900">{product.title}</h3>
                      <p className="text-sm text-gray-500">{product.subCategory.title}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

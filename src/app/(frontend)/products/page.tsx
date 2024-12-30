import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Media } from '@/payload-types'
export default async function Products() {
  const payload = await getPayload({
    config: configPromise,
  })

  const products = await payload.find({
    collection: 'products',
  })

  const categories = await payload.find({
    collection: 'categories',
  })

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.docs.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h2>
              <ul className="list-disc pl-6">
                {products.docs
                  .filter((product) => product.mainCategory.id === category.id)
                  .map((product) => (
                    <li key={product.id} className="mb-2">
                      <Link
                        href={`/products/${product.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      >
                        {product.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

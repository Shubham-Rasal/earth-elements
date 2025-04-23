import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TileDisplay } from '@/components/ui/tile-display'
import type { ProductWithRelations } from '@/components/products'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const payload = await getPayload({
    config: configPromise,
  })

  const { docs } = await payload.find({
    collection: 'products',
    where: {
      id: {
        equals: params.id,
      },
    },
    depth: 2, // This ensures we get the related data
  })

  if (!docs.length) {
    notFound()
  }

  const product = docs[0] as ProductWithRelations


const similarTiles = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    image: '/api/media/file/Natural_Autumn_22.jpg',
    description: `This is a description for Product ${index + 1}.`,
}))

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/products"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            ← Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-white shadow-lg">
            <Image
              src={product.media.url!}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <div className="mt-2 flex gap-2">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                  {product.mainCategory.title}
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                  {product.subCategory.title}
                </span>
              </div>
            </div>

            {product.description && (
              <div className="prose max-w-none">
                <p className="text-gray-600">{product.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Similar Products */}
        {similarTiles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Variants</h2>
            <TileDisplay tiles={similarTiles} />
          </div>
        )}
      </div>
    </div>
  )
}

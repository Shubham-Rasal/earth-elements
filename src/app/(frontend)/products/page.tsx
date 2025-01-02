import Badge from '@/components/badge'
import { getCategories, getProducts, getSubcategories } from '@/app/(frontend)/products/action'
import { Suspense } from 'react'
import Products, { ProductWithRelations } from '@/components/products'

export default async function ProductsPage() {
  const { docs: categories } = await getCategories()
  const { docs: subcategories } = await getSubcategories()
  const { docs: products } = await getProducts()

  const data = Object.fromEntries(
    categories.map((category) => [
      category.title,
      subcategories.filter((subcategory) => subcategory.parentCategory === category.id),
    ]),
  )

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Categories */}
        <div className="sticky top-0 z-10 flex w-full flex-col items-center justify-center gap-2 bg-gray-50 px-4 py-6 sm:flex-row sm:justify-between sm:px-6">
          <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-md">
            <span className="text-sm font-medium">Categories:</span>
            <Suspense fallback={<span>Loading...</span>}>
              {Object.keys(data).map((category) => (
                <Badge key={category} className="cursor-pointer text-sm" category={category}>
                  {category}
                </Badge>
              ))}
            </Suspense>
          </div>
        </div>
        <Suspense fallback={<span>Loading...</span>}>
          <Products products={products as ProductWithRelations[]} />
        </Suspense>
      </div>
    </div>
  )
}

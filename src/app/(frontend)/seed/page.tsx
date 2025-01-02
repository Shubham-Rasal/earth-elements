'use client'
import { seedCategoriesAndSubcategories } from './actions'

export default function Products() {

  return (
    <div className="bg-gray-100 min-h-screen">
        <button onClick={() => seedCategoriesAndSubcategories()}>
            Seed
        </button>
    </div>
  )
}

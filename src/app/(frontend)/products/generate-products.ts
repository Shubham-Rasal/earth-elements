import { Product } from './products'
import { categories } from './products'

export function generateDummyProducts(): Product[] {
  const products: Product[] = []
  let id = 1

  Object.entries(categories).forEach(([category, subcategories]) => {
    subcategories.forEach((subcategory) => {
      // Generate 10 products for each subcategory
      for (let i = 1; i <= 10; i++) {
        products.push({
          id: `product-${id}`,
          name: `${subcategory} ${i}`,
          category,
          subcategory,
          price: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
          image: `/amber.jpg`,
        })
        id++
      }
    })
  })

  return products
}


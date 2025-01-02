'use server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
export const seedCategoriesAndSubcategories = async () => {

    const subcategories = [
        "Slates",
        "Lime Stones",
        "Sand Stones"
    ]
    const payload = await getPayload({
        config: configPromise,
      })

           for (const subcategoryTitle of subcategories) {
        
          await payload.create({
            collection: 'subcategories',
            data: {
              title: subcategoryTitle,
              parentCategory: 1
            }
          })
        
      
    
  }
}
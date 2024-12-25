import { type CollectionConfig } from 'payload'

const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Product',
    plural: 'Products',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Project Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'mainCategory',
      label: 'Main Category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'subCategory',
      label: 'Subcategory',
      type: 'relationship',
      relationTo: 'subcategories',  
      required: true,
    },
    {
      name: 'media',
      label: 'Media',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
  ],
};

export default Products;

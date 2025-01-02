import type { CollectionConfig } from 'payload'

const Categories: CollectionConfig = {
    slug: 'categories',
    labels: {
      singular: 'Category',
      plural: 'Categories',
    },
    admin: {
      useAsTitle: 'title',
    },
    fields: [
      {
        name: 'title',
        label: 'Category Title',
        type: 'text',
        required: true,
      }
    ],
  };

const Subcategories: CollectionConfig = {
  slug: 'subcategories',
  labels: {
    singular: 'Subcategory',
    plural: 'Subcategories',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Subcategory Title',
      type: 'text',
      required: true,
    },
    {
      name: 'parentCategory',
      label: 'Parent Category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
  ],
};



export { Categories , Subcategories };

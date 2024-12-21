import { getPayload, type CollectionConfig } from 'payload'
import configPromise from '@payload-config'

const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Project',
    plural: 'Projects',
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

export default Projects;

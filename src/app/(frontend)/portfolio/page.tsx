import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Project } from '@/payload-types'

export default async function Portfolio() {

    const payload = await getPayload({
        config: configPromise,
      })
    
      const {docs}  = await payload.find({
        collection: 'projects',
      })
  return (
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docs.map((project: Project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image 
                  src={typeof project.media === 'number' ? '' : (project.media?.url || '')} 
                  alt={project.title} 
                  width={300} 
                  height={300} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

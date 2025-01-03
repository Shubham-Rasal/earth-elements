import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Image from 'next/image'

export default async function EarthElements() {
  const payload = await getPayload({
    config: configPromise,
  })

  // const categories = await payload.find({
  //   collection: 'categories',
  // })

  // const media = await payload.find({
  //   collection: 'media',
  // })



  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Earth Elements</h1>
              <p className="text-xl mb-6">
                Step into a world where the art of Interior Design is meticulously crafted to bring
                together timeless elegance and cutting-edge modern innovation. Allowing you to
                transform your living spaces into the epitome of luxury and sophistication.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded">Start Project</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
             {/* <Image src={media.docs[0].url!} alt="Image 1" width={300} height={300} /> */}
            </div>
          </div>
          <div className="flex justify-between mt-12 text-center">
            <div>
              <div className="text-4xl font-bold">400+</div>
              <div>Project Complete</div>
            </div>
            <div>
              <div className="text-4xl font-bold">600+</div>
              <div>Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100+</div>
              <div>Unique Styles</div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Lighting Design', 'Interior Design', 'Outdoor Design'].map((service) => (
                <div key={service} className="flex items-start">
                  <div className="mr-4">
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service}</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">What We Create</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* {categories.docs.map((item: any, i) => (
              <div key={i} className="relative">
                <img
                  src={`https://picsum.photos/192${i}`}
                  alt={`Design ${i}`}
                  className="w-full h-64 object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 bg-white p-2 rounded-tr">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </div>
            ))} */}
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Designing Your Dream in Three Simple Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                {['Start Project', 'Craft', 'Execute'].map((step, index) => (
                  <div key={step} className="flex items-start mb-6">
                    <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step}</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <img
                  src="https://picsum.photos/1920"
                  alt="Interior design process"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <img
                src="https://picsum.photos/1920"
                alt="Interior design showcase"
                className="w-full h-64 object-cover rounded"
              />
            </div>
            <div className="bg-gray-900 text-white p-8 rounded flex flex-col justify-between">
              <div>
                <blockquote className="text-xl mb-4">
                  Working with your design team was an absolute pleasure. The attention to detail
                  and creativity exceeded my expectations. Thank you for making my home beautiful!
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="https://picsum.photos/1920"
                    alt="Sophia Carter"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">Sophia Carter</div>
                    <div className="text-sm">Happy Client</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="mr-2">
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button>
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}

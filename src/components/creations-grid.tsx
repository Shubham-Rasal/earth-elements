import Link from 'next/link'
import Image from 'next/image'

export default function CreationsGrid() {
  return (
    <section className="w-full px-4 py-12 md:py-24">
      <div className="container mx-auto">
        <div className="bg-black">
          
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Third Card */}
          <div className="lg:w-1/2 right-0 bg-black aspect-[4/3] md:col-span-3 overflow-hidden rounded-2xl md:-mt-20 z-0 absolute ">
            <Image
              src="/amber.jpg"
              alt="Interior exhibition in Italy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex justify-end">
                {/* <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="rotate-45">→</span>
                </div> */}
              </div>
              <div>
                <h3 className="text-white text-lg font-medium">Interior exhibition in Italy</h3>
                <p className="text-white/80 text-sm mt-2">Digital art & design around the world</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full lg:left-[-6rem]  lg:border-2 border-transparent border-t-gray-200 border-x-gray-200  border-b-gray-100 lg:aspect-[2/1] md:col-span-3 overflow-hidden rounded-lg md:-mt-20 z-0 absolute ">
          <div className="flex items-start lg:ml-12 flex-col justify-center  lg:w-3/5 gap-2 h-full">
            <h2 className="text-3xl font-bold text-left text-gray-900">
              <span className="bg-white  rounded-md">Our Creations</span>
            </h2>

            <Link
              href="#"
              className="lg:text-xl text-base  mx-auto text-left text-gray-600 hover:text-gray-900 flex items-start"
            >
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, natus illum sunt maxime expedita itaque consectetur.
              <span className="hidden lg:inline-block">→</span>
            </Link>
          </div>
          
          </div>

          {/* First Card */}
          <div className="relative aspect-square overflow-hidden rounded-2xl md:col-span-1 bottom-[-12rem] z-10 w-60">
            <Image src="/amber.jpg" alt="Exploration Concept" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-white text-lg font-medium">Exploration Concept</h3>
              <p className="text-white/80 text-sm mt-2">Experience design & art direction</p>
            </div>
          </div>

          {/* Second Card */}
          <div className="relative aspect-square overflow-hidden rounded-2xl md:col-span-1 -mt-12 md:mt-24 z-20">
            <Image src="/amber.jpg" alt="Interior workspace" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

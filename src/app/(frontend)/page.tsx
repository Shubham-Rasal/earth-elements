"use client"
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

export default function EarthElements() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Earth Elements</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Categories</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Earth Elements</h1>
              <p className="text-xl mb-6">
                Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern innovation. Allowing you to transform your living spaces into the epitome of luxury and sophistication.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded">Start Project</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/1920" alt="Interior design 1" className="w-full h-full object-cover" />
              <img src="https://picsum.photos/1920" alt="Interior design 2" className="w-full h-full object-cover" />
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
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">What We Create</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative">
                <img src={`https://picsum.photos/192${i}`} alt={`Design ${i}`} className="w-full h-64 object-cover rounded" />
                <div className="absolute bottom-0 left-0 bg-white p-2 rounded-tr">
                  <h3 className="font-semibold">Interior Design</h3>
                </div>
              </div>
            ))}
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
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <img src="https://picsum.photos/1920" alt="Interior design process" className="w-full h-full object-cover rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <img src="https://picsum.photos/1920" alt="Interior design showcase" className="w-full h-64 object-cover rounded" />
            </div>
            <div className="bg-gray-900 text-white p-8 rounded flex flex-col justify-between">
              <div>
                <blockquote className="text-xl mb-4">
                  Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!
                </blockquote>
                <div className="flex items-center">
                  <img src="https://picsum.photos/1920" alt="Sophia Carter" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold">Sophia Carter</div>
                    <div className="text-sm">Happy Client</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="mr-2"><ChevronLeftIcon className="w-6 h-6" /></button>
                <button><ChevronRightIcon className="w-6 h-6" /></button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-8">Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox</p>
            <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-l border-t border-b border-l"
                required
              />
              <button type="submit" className="bg-black text-white px-6 py-2 rounded-r">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Earth Elements</h3>
              <p>Your premier destination for luxury and modern interior design.</p>
            </div>
            {['Our Services', 'Our Projects', 'Resources'].map((title) => (
              <div key={title}>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Link 1</a></li>
                  <li><a href="#" className="hover:underline">Link 2</a></li>
                  <li><a href="#" className="hover:underline">Link 3</a></li>
                  <li><a href="#" className="hover:underline">Link 4</a></li>
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2023 Earth Elements. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
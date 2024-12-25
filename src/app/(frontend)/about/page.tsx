import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Earth Elements
            </h1>
            <div className="prose max-w-prose text-gray-700 space-y-4">
              <p className="italic">
                A story etched in stone. A collection born from a fine blending of: design, color,
                material and technology, ushering in a new way of aesthetic and tasteful living.
              </p>

              <p>
                The elemental beauty and elegance of natural stone rediscovered. Earth Elements
                infuses life into every space and corner of your home or commercial establishment.
              </p>

              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                A sinuous coming together of innovation and creativity set us apart from the rest.
              </blockquote>

              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-gray-900">Our Promise</h2>
                <p>
                  You dream, we deliver. You imagine, we translate your designs into reality. Your
                  aesthetic sense will come alive with our extensive range of products.
                </p>
              </div>

              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Natural Stone</h3>
                <p className="text-xl italic text-gray-600">Primeval • Timeless • Eternal</p>
                <p className="mt-4 text-gray-700">Revisit through Earth Elements</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/stone-texture.jpg"
                alt="Natural Stone Texture"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

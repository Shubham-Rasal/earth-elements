import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import FeatureSection from "@/components/test"
import CreationsGrid from "@/components/creations-grid"
import ShopByRoom from "shop-by-room"
import { Testimonials } from "@/components/ui/testimonials"

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-[#1d2a1f] relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Modern furniture setup"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1d2a1f]/80"></div>
      </div>

      {/* Navigation */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold text-white">
            Furniture
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/furniture" className="text-white/70 hover:text-white">
              Furniture
            </Link>
            <Link href="/accessories" className="text-white/70 hover:text-white">
              Accessories
            </Link>
            <Link href="/about" className="text-white/70 hover:text-white">
              About us
            </Link>
          </div>
        </div>
      </nav> */}

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="grid md:grid-cols-12 gap-8 pt-24">
          {/* Left Column */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-white/80">
              Having a home you love means having furnishing that you&apos;re proud of. We are proud to bring you trendy
              furniture for every room in the house, with the added bonus.
            </p>
            <button className="flex items-center text-[#8fa88d] hover:text-white">
              Read More
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Center Column */}
          <div className="md:col-span-6 space-y-8">

            <h1 className="text-5xl md:text-7xl font-bold text-white text-center leading-tight mt-12">
              Make a room
              <br />
              comfortable &
              <br />
              elegant
            </h1>
          </div>

          {/* Right Column - Featured Products */}
          {/* <div className="md:col-span-3">
            <div className="space-y-4">
              <h2 className="text-2xl text-white mb-6">Featured</h2>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg" alt="Black Sofa" width={64} height={64} className="object-cover" />
                </div>
                <div>
                  <p className="text-white">Black Sofa</p>
                  <p className="text-2xl font-semibold text-white">$250</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg" alt="Black Chair" width={64} height={64} className="object-cover" />
                </div>
                <div>
                  <p className="text-white">Black Chair</p>
                  <p className="text-2xl font-semibold text-white">$40</p>
                </div>
              </div>

              <button className="w-full py-3 px-4 rounded-lg bg-black/30 text-white hover:bg-black/40 transition-colors">
                More Product
              </button>
            </div>
          </div> */}
        </div>
      </div>
     
    </main>
    <CreationsGrid/>
    <FeatureSection/>
    <ShopByRoom/>
    <Testimonials/>
    </>

  )
}


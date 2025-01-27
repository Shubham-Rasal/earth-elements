import Link from "next/link"
import Image from "next/image"

export default function FeatureSection() {
  return (
    <section className="w-full px-4 py-12 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Left side images */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/amber.jpg"
                alt="Modern interior design"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -right-6 w-2/3">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/amber.jpg"
                  alt="Workspace furniture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="flex flex-col justify-center md:pl-12">
            <span className="text-sm text-gray-500 mb-4">ABOUT US</span>
            <h2 className="text-3xl font-medium mb-4">Shinning a light on furniture</h2>
            <p className="text-gray-600 mb-6">
              We have a passion to create exclusive yet practical designs that bring out the best in your space. Our
              commitment to style is matched by our dedication to quality.
            </p>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2 w-fit">
              Read More
              <span className="inline-block">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


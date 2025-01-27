import Link from "next/link"
import Image from "next/image"

export default function ShopByRoom() {
  const rooms = [
    {
      name: "Living Room",
      image: "/amber.jpg",
      delay: "0",
    },
    {
      name: "Dining Room",
      image: "/amber.jpg",
      delay: "100",
    },
    {
      name: "Office Room",
      image: "/amber.jpg",
      delay: "200",
    },
  ]

  return (
    <section className="w-full px-4 py-12 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Room buttons */}
          <div className="space-y-4">
            {rooms.map((room, index) => (
              <div
                key={room.name}
                className="group"
                style={{
                  marginLeft: `${index * 2}rem`,
                }}
              >
                <Link href="#" className="inline-flex items-center">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
                    <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                  </div>
                  <div className="ml-2 rounded-full bg-sage-700/10 px-6 py-3 text-gray-700 transition-colors group-hover:bg-gray-700 group-hover:text-white">
                    {room.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Right side - Content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-medium">Shop by room</h2>
            <p className="text-gray-600">
              Discover perfect pieces for every space in your home. We've curated collections for each room to bring you
              timeless furniture that pairs style with functionality.
            </p>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
              Show all styles
              <span className="inline-block">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


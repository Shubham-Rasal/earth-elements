import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'
const interFont = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-inter',
})

import './globals.css'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Earth Elements',
  description: 'Luxury and modern interior design in India.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${interFont.variable} antialiased`}>
          <Navbar />
          {children}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <p>
                    <a href="mailto:info@earthelements.com" className="hover:underline">
                      info@earthelements.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+1-415-123-4567" className="hover:underline">
                      +1 (415) 123-4567
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=123+Main+St,+San+Francisco,+CA+94105"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      123 Main St, San Francisco, CA 94105
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/blog" className="hover:underline">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/portfolio" className="hover:underline">
                        Portfolio
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                <p>&copy; 2023 Earth Elements. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ViewTransitions>
  )
}

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[peru] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Susheela Arts</h3>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <p className="text-white/80">
              Follow us to stay updated with our latest collections.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} Susheela Arts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


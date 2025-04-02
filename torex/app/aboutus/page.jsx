import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Mail } from 'lucide-react'

import { Button } from "@/components/ui/aboutus/button"
import headerLogo from "@/app/media/header_logo.png"

export default function AboutUs() {

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <header className="bg-gray-800 shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Image />
            <a className="absolute font-bold text-3xl right-70" href="/"><h1>TOREX</h1></a>
            <nav className="hidden md:flex space-x-4">
                <Link href="/aboutus" className="text-gray-300 hover:text-green-400">About Us</Link>
                <Link href="/addlocation" className="text-gray-300 hover:text-green-400">Add your location</Link>
                <Link href="/login" className="text-gray-300 hover:text-green-400">Log in</Link>
                <Link href="/signup" className="text-gray-300 hover:text-green-400">Sign up</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About TOREX</h1>
            <p className="text-xl text-gray-400 mb-8">Connecting sports enthusiasts with the best turf grounds</p>
            <Link  href="/venue">
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Book a Turf Now
            </Button>
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-400 mb-4">
                  At TOREX, we're passionate about making sports accessible to everyone. Our mission is to connect sports enthusiasts with high-quality turf grounds, making it easier than ever to play the games you love.
                </p>
                <p className="text-gray-400">
                  We believe that everyone should have the opportunity to enjoy sports in top-notch facilities, regardless of their skill level or background. That's why we've created a platform that simplifies the process of finding and booking sports turfs.
                </p>
              </div>
              <div className="relative h-64 md:h-auto">
              <Image
                src="https://www.chromethemer.com/download/hd-wallpapers/lionel-messi-football-3840x2160.jpg"
                alt="Sports enthusiasts playing on a turf"
                height={400}
                width={600}
                objectFit="cover"
                className="rounded-lg"
              />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose TOREX?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Wide Coverage</h3>
                <p className="text-gray-400">Access to a vast network of turf grounds across multiple locations.</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                <p className="text-gray-400">Simple and quick booking process, available 24/7 at your convenience.</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-400">Join a thriving community of sports enthusiasts and make new connections.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Name 1", role: "Founder & CEO", image: "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg" },
                { name: "Name 2", role: "CTO", image: "https://thumbs.dreamstime.com/b/portrait-attractive-cheerful-young-man-smiling-happy-face-human-expressions-emotions-model-beautiful-smile-blue-eyes-147751681.jpg" },
                { name: "Name 3", role: "Head of Operations", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5lkOdjzaFLgLPe7ewAsoc8zPopHxW49hXg&s" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-8">Join TOREX today and experience the best in turf booking!</p>
            <Link href="/signup">
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Sign Up Now
            </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/placeholder.svg?height=40&width=120" alt="TOREX" width={120} height={40} className="h-10" />
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>contact@torex.com</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 TOREX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
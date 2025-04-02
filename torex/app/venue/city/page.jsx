"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Star, ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/login/button"
import { Input } from "@/components/ui/login/input"
import { Label } from "@/components/ui/login/label"

export default function VenuePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Football', 'Cricket', 'Basketball', 'Badminton', 'Tennis']

  const turfs = [
    { id: 1, name: 'Green Field Turf', sport: 'Football', rating: 4.5, location: 'Anna Nagar', image: '/placeholder.svg?height=200&width=300' },
    { id: 2, name: 'Cricket Paradise', sport: 'Cricket', rating: 4.2, location: 'T Nagar', image: '/placeholder.svg?height=200&width=300' },
    { id: 3, name: 'Hoop Dreams Court', sport: 'Basketball', rating: 4.7, location: 'Adyar', image: '/placeholder.svg?height=200&width=300' },
    { id: 4, name: 'Smash Point', sport: 'Badminton', rating: 4.3, location: 'Velachery', image: '/placeholder.svg?height=200&width=300' },
    { id: 5, name: 'Ace Tennis Club', sport: 'Tennis', rating: 4.6, location: 'Nungambakkam', image: '/placeholder.svg?height=200&width=300' },
    { id: 6, name: 'Multi-Sport Arena', sport: 'All', rating: 4.4, location: 'OMR', image: '/placeholder.svg?height=200&width=300' },
  ]

  const filteredTurfs = selectedCategory === 'All' 
    ? turfs 
    : turfs.filter(turf => turf.sport === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <header className="bg-gray-800 shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Image src="/placeholder.svg?height=40&width=120" alt="TOREX" width={120} height={40} className="h-10" />
            <nav className="hidden md:flex space-x-4">
              <Link href="/" className="text-gray-300 hover:text-green-400">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-green-400">About Us</Link>
              <Link href="/contact" className="text-gray-300 hover:text-green-400">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Venues in Chennai</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gray-700 hover:bg-gray-600'
                } text-white font-bold py-2 px-4 rounded`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTurfs.map((turf) => (
            <div
              key={turf.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1"
            >
              <Image
                src={turf.image}
                alt={turf.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{turf.name}</h3>
                <p className="text-gray-400 mb-2">{turf.sport}</p>
                <div className="flex items-center mb-2">
                  <Star className="text-yellow-400 w-5 h-5 mr-1" />
                  <span>{turf.rating}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-gray-400 w-5 h-5 mr-1" />
                  <span className="text-gray-400">{turf.location}</span>
                </div>
                <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/placeholder.svg?height=40&width=120" alt="TOREX" width={120} height={40} className="h-10" />
            </div>
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-2" />
              <span>Open 24/7</span>
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
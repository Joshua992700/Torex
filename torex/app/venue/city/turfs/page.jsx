"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin, Phone, Mail, Clock, Check, X } from 'lucide-react'

import { Button } from "@/components/ui/turfs/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/turfs/dialog"
import { Label } from "@/components/ui/turfs/label"
import { Input } from "@/components/ui/turfs/input"

export default function TurfBookingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [fromTime, setFromTime] = useState('')
  const [toTime, setToTime] = useState('')

  const turfInfo = {
    name: "Green Field Turf",
    rating: 4.5,
    location: "123 Sports Avenue, Chennai, Tamil Nadu",
    description: "Experience the thrill of playing on our state-of-the-art artificial turf. Perfect for football, cricket, and more!",
    amenities: ["Floodlights", "Changing Rooms", "Parking", "Refreshments", "First Aid"],
    phone: "+91 98765 43210",
    email: "info@greenfieldturf.com",
    openingHours: "6:00 AM - 10:00 PM",
  }

  const reviews = [
    { id: 1, user: "Rahul S.", rating: 5, comment: "Excellent facilities and well-maintained turf. Highly recommended!" },
    { id: 2, user: "Priya M.", rating: 4, comment: "Great place to play, but could use more parking space." },
    { id: 3, user: "Arun K.", rating: 5, comment: "The floodlights are fantastic for evening games. Love this place!" },
  ]

  const suggestedTurfs = [
    { id: 1, name: "Sports Arena", image: "/placeholder.svg?height=100&width=150" },
    { id: 2, name: "City Central Turf", image: "/placeholder.svg?height=100&width=150" },
    { id: 3, name: "Goal Post Grounds", image: "/placeholder.svg?height=100&width=150" },
  ]

  const handleCheckAvailability = () => {
    // Here you would typically check availability with an API call
    console.log('Checking availability for:', { fromTime, toTime })
    // For demo purposes, we'll just close the dialog
    setIsBookingOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
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

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{turfInfo.name}</h1>
            <div className="flex items-center mb-4">
              <Star className="text-yellow-400 w-5 h-5 mr-1" />
              <span className="mr-2">{turfInfo.rating}</span>
              <MapPin className="text-gray-400 w-5 h-5 mr-1" />
              <span className="text-gray-400">{turfInfo.location}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="aspect-w-4 aspect-h-3">
                  <Image
                    src={`https://img.freepik.com/free-photo/texture-grass-field_1232-251.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726185600&semt=ais_hybrid${index + 1}`}
                    alt={`Turf Image ${index + 1}`}
                    width={300}
                    height={400}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-300 mb-6">{turfInfo.description}</p>
            <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              {turfInfo.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 w-5 h-5 mr-2" />
                  {amenity}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-2 mb-6">
              <p className="flex items-center">
                <Phone className="text-gray-400 w-5 h-5 mr-2" />
                {turfInfo.phone}
              </p>
              <p className="flex items-center">
                <Mail className="text-gray-400 w-5 h-5 mr-2" />
                {turfInfo.email}
              </p>
              <p className="flex items-center">
                <Clock className="text-gray-400 w-5 h-5 mr-2" />
                {turfInfo.openingHours}
              </p>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
            <div className="space-y-4 mb-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{review.user}</span>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 w-5 h-5 mr-1" />
                      <span>{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg mb-6">
                  Book Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-gray-800 text-gray-100">
                <DialogHeader>
                  <DialogTitle>Book {turfInfo.name}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="fromTime" className="text-right">
                      From
                    </Label>
                    <Input
                      id="fromTime"
                      type="time"
                      className="col-span-3"
                      value={fromTime}
                      onChange={(e) => setFromTime(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="toTime" className="text-right">
                      To
                    </Label>
                    <Input
                      id="toTime"
                      type="time"
                      className="col-span-3"
                      value={toTime}
                      onChange={(e) => setToTime(e.target.value)}
                    />
                  </div>
                </div>
                <Button onClick={handleCheckAvailability} className="bg-green-600 hover:bg-green-700">
                  Check Availability
                </Button>
              </DialogContent>
            </Dialog>
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-4">Suggested Turfs</h2>
              <div className="space-y-4">
                {suggestedTurfs.map((turf) => (
                  <div key={turf.id} className="flex items-center">
                    <Image
                      src={turf.image}
                      alt={turf.name}
                      width={60}
                      height={40}
                      className="rounded mr-4"
                    />
                    <span>{turf.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/placeholder.svg?height=40&width=120" alt="TOREX" width={120} height={40} className="h-10" />
            </div>
            <div className="flex items-center">
              <span>© 2023 TOREX. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
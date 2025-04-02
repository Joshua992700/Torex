"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/venue/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/venue/dropdown-menu"

export default function LocationSelectPage() {
  const [selectedDistrict, setSelectedDistrict] = useState('Select District')

  const tamilNaduDistricts = [
    'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode',
    'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam',
    'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga',
    'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur',
    'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'
  ]

  const famousCities = ['Chennai', 'Coimbatore', 'Madurai', 'Erode', 'Salem', 'Tirupur']

  const router  = useRouter();

  const handleSubmit = () => {
    console.log('Selected district:', selectedDistrict);
    router.push('/venue/city');
    // Here you would typically handle the submission, e.g., navigate to a new page or make an API call
  };

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
        <h1 className="text-4xl font-bold mb-8 text-center">Select Your Location</h1>
        
        <div className="max-w-md mx-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {selectedDistrict}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full max-h-60 overflow-y-auto">
              {tamilNaduDistricts.map((district) => (
                <DropdownMenuItem
                  key={district}
                  onSelect={() => setSelectedDistrict(district)}
                >
                  {district}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Popular Cities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {famousCities.map((city) => (
                <Button
                  key={city}
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedDistrict(city)}
                >
                  {city}
                </Button>
              ))}
            </div>
          </div>

          <Button
            className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </Button>
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
"use client"
import { useState } from 'react'
import Image from 'next/image'
import Resizer from 'react-image-file-resizer';
import { Upload, MapPin, DollarSign, Clock, Phone, Mail, Plus, Minus, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/addLocation/button"
import { Input } from "@/components/ui/addLocation/input"
import { Label } from "@/components/ui/addLocation/label"
import { Textarea } from "@/components/ui/addLocation/textarea"
import { Card, CardContent } from "@/components/ui/addLocation/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/addLocation/dropdown-menu"
import supabase from '@/app/sbconfig'

const resizeImage = (file, callback) => {
  Resizer.imageFileResizer(
    file,
    800, // Max width
    600, // Max height
    'JPEG', // Format
    70,   // Quality (0-100)
    0,    // Rotation
    (uri) => {
      callback(uri);
    },
    'blob' // Output type
  );
};

const uploadImage = async (file) => {
  const { data, error } = await supabase.storage
    .from('Images')
    .upload(`public/${file.name}`, file);

  if (error) {
    console.error('Error uploading image:', error);
    return;
  }

  const { publicURL, error: urlError } = supabase.storage
    .from('Images')
    .getPublicUrl(`public/${file.name}`);

  if (urlError) {
    console.error('Error getting public URL:', urlError);
    return;
  }

  return publicURL;
};

export default function AddTurfInfoPage() {
  const [turfName, setTurfName] = useState('')
  const [pricePerHour, setPricePerHour] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('Select Location')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [openingTime, setOpeningTime] = useState('')
  const [closingTime, setClosingTime] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState(Array(6).fill(''))
  const [amenities, setAmenities] = useState([''])

  const tamilNaduDistricts = ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"]

  const handleImageUpload = (index, e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newImages = [...images]
        newImages[index] = e.target?.result
        setImages(newImages)
      }
      reader.readAsDataURL(file)
    }
  }

  const addAmenity = () => {
    setAmenities([...amenities, ''])
  }

  const removeAmenity = (index) => {
    const newAmenities = amenities.filter((_, i) => i !== index)
    setAmenities(newAmenities)
  }

  const handleAmenityChange = (index, value) => {
    const newAmenities = [...amenities]
    newAmenities[index] = value
    setAmenities(newAmenities)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from('turf_info')
      .insert([
        {
          turf_name: turfName,
          price_per_hour: parseFloat(pricePerHour),
          location: selectedDistrict,
          phone_number: phoneNumber,
          email: email,
          opening_time: openingTime,
          closing_time: closingTime,
          description: description,
          turf_images: images,
          amenities: amenities,
        }
      ])

    if (error) {
      console.error('Error inserting data:', error)
    } else {
      console.log('Data inserted successfully:', data)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-gray-900 text-gray-100">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <Image src="/placeholder.svg?height=40&width=120" alt="TOREX" width={120} height={40} className="h-10" />
          <h1 className="text-3xl font-bold">Add New Turf</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="turfName">Turf Name</Label>
                  <Input
                    id="turfName"
                    placeholder="Enter turf name"
                    value={turfName}
                    onChange={(e) => setTurfName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price per Hour</Label>
                  <div className="relative mt-1">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="price"
                      type="number"
                      placeholder="0.00"
                      value={pricePerHour}
                      onChange={(e) => setPricePerHour(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative mt-1">
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
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="openingTime">Opening Time</Label>
                  <div className="relative mt-1">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="openingTime"
                      type="time"
                      value={openingTime}
                      onChange={(e) => setOpeningTime(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="closingTime">Closing Time</Label>
                  <div className="relative mt-1">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="closingTime"
                      type="time"
                      value={closingTime}
                      onChange={(e) => setClosingTime(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter turf description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Turf Images</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    {image ? (
                      <Image
                        src={image}
                        alt={`Turf Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    ) : (
                      <label htmlFor={`imageUpload${index}`} className="cursor-pointer">
                        <div className="h-40 bg-gray-700 flex items-center justify-center rounded-md">
                          <Upload className="text-gray-400 h-8 w-8" />
                        </div>
                        <input
                          type="file"
                          id={`imageUpload${index}`}
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(index, e)}
                        />
                      </label>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center mb-2">
                  <Input
                    placeholder={`Amenity ${index + 1}`}
                    value={amenity}
                    onChange={(e) => handleAmenityChange(index, e.target.value)}
                    className="mr-2"
                  />
                  {index > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => removeAmenity(index)}
                      className="text-red-500"
                    >
                      <Minus />
                    </Button>
                  )}
                </div>
              ))}
              <Button variant="outline" onClick={addAmenity} className="mt-4">
                <Plus className="mr-2" />
                Add Amenity
              </Button>
            </CardContent>
          </Card>

          <Button type="submit" className="w-full py-4 mt-6">
            Submit Turf Information
          </Button>
        </form>
      </main>
    </div>
  )
}

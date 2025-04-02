"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Camera, Mail, MapPin, Bell, Settings, Edit, Save } from 'lucide-react'

import { Button } from "@/components/ui/user/button"
import { Input } from "@/components/ui/user/input"
import { Label } from "@/components/ui/user/label"
import { Textarea } from "@/components/ui/user/textarea"
import { Switch } from "@/components/ui/user/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/user/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/user/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/user/select"

export default function UserProfilePage() {
  const [user, setUser] = useState({
    profilePicture: '/placeholder.svg?height=200&width=200',
    username: 'johndoe123',
    email: 'johndoe@example.com',
    age: 28,
    gender: 'Male',
    location: 'Chennai, Tamil Nadu',
    bio: 'Sports enthusiast and amateur footballer. Love booking turfs for weekend matches with friends!',
  })

  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState(user)

  const handleEditToggle = () => {
    if (isEditing) {
      setUser(editedUser)
    }
    setIsEditing(!isEditing)
  }

  const handleInputChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value })
  }

  const handleProfilePictureChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setEditedUser({ ...editedUser, profilePicture: e.target?.result })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Image src="/placeholder.svg?height=40&width=120" alt="TOREX" width={120} height={40} className="h-10" />
            <h1 className="text-2xl font-bold">User Profile</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative">
                  <Image
                    src={isEditing ? editedUser.profilePicture : user.profilePicture}
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                  {isEditing && (
                    <Label htmlFor="profile-picture" className="absolute bottom-0 right-0 bg-green-600 p-2 rounded-full cursor-pointer">
                      <Camera className="h-6 w-6" />
                      <Input
                        id="profile-picture"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleProfilePictureChange}
                      />
                    </Label>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold">{isEditing ? editedUser.username : user.username}</h2>
                    <Button onClick={handleEditToggle} variant="outline">
                      {isEditing ? <Save className="mr-2 h-4 w-4" /> : <Edit className="mr-2 h-4 w-4" />}
                      {isEditing ? 'Save' : 'Edit'}
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      {isEditing ? (
                        <Input
                          name="email"
                          value={editedUser.email}
                          onChange={handleInputChange}
                          className="bg-gray-700"
                        />
                      ) : (
                        user.email
                      )}
                    </p>
                    <p className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {isEditing ? (
                        <Input
                          name="location"
                          value={editedUser.location}
                          onChange={handleInputChange}
                          className="bg-gray-700"
                        />
                      ) : (
                        user.location
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="info" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="info">Personal Info</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="settings">Account Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="info">
              <Card className="bg-gray-800">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Age</Label>
                      {isEditing ? (
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          value={editedUser.age}
                          onChange={handleInputChange}
                          className="bg-gray-700"
                        />
                      ) : (
                        <p>{user.age}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender</Label>
                      {isEditing ? (
                        <Select
                          value={editedUser.gender}
                          onValueChange={(value) => setEditedUser({ ...editedUser, gender: value })}
                        >
                          <SelectTrigger className="bg-gray-700">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <p>{user.gender}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    {isEditing ? (
                      <Textarea
                        id="bio"
                        name="bio"
                        value={editedUser.bio}
                        onChange={handleInputChange}
                        className="bg-gray-700"
                        rows={4}
                      />
                    ) : (
                      <p>{user.bio}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications">
              <Card className="bg-gray-800">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <Switch id="email-notifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <Switch id="push-notifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    <Switch id="sms-notifications" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings">
              <Card className="bg-gray-800">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">Change Password</Button>
                  <Button variant="outline" className="w-full">Update Email Address</Button>
                  <Button variant="destructive" className="w-full">Delete Account</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <Image src="/placeholder.svg?height=40&width=120" alt="TOREX" width={120} height={40} className="h-10 mx-auto mb-4" />
          <p>© 2023 TOREX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

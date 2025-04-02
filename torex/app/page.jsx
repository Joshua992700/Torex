  import { Search, MapPin, ChevronDown, Star, ArrowRight } from "lucide-react"
  import Image from "next/image"
  import Link from "next/link"
  import headerLogo from "@/app/media/header_logo.png"
  import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/venue/select"

  export default function TorexLandingPage({ auth, userProfileImage }) {
    const cities = [
      { name: 'Ariyalur' }, { name: 'Chengalpattu' }, { name: 'Chennai' }, { name: 'Coimbatore' },
      { name: 'Cuddalore' }, { name: 'Dharmapuri' }, { name: 'Dindigul' }, { name: 'Erode' },
      { name: 'Kallakurichi' }, { name: 'Kanchipuram' }, { name: 'Kanyakumari' }, { name: 'Karur' },
      { name: 'Krishnagiri' }, { name: 'Madurai' }, { name: 'Mayiladuthurai' }, { name: 'Nagapattinam' },
      { name: 'Namakkal' }, { name: 'Nilgiris' }, { name: 'Perambalur' }, { name: 'Pudukkottai' },
      { name: 'Ramanathapuram' }, { name: 'Ranipet' }, { name: 'Salem' }, { name: 'Sivagangai' },
      { name: 'Tenkasi' }, { name: 'Thanjavur' }, { name: 'Theni' }, { name: 'Thoothukudi' },
      { name: 'Tiruchirappalli' }, { name: 'Tirunelveli' }, { name: 'Tirupattur' }, { name: 'Tiruppur' },
      { name: 'Tiruvallur' }, { name: 'Tiruvannamalai' }, { name: 'Tiruvarur' }, { name: 'Vellore' },
      { name: 'Viluppuram' }, { name: 'Virudhunagar' }
    ];
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <header className="bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Image src={headerLogo} alt="TOREX" width={40} height={40} className="h-10" />
              <h1 href="/" className="font-bold text-3xl">TOREX</h1>
              <div className="relative">
                <MapPin className="absolute left-40 top-1/2 transform -translate-y-1/2 text-gray-400" size={30} />
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Popular Cities</SelectLabel>
                      {cities.map((city, index) => (
                        <SelectItem key={index} value={city.name.toLowerCase()}>{city.name}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
            {auth ? (
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg"
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="rounded-full h-10 w-10"
                />
                <Link href="/profile" className="text-gray-300 hover:text-green-400">Profile</Link>
              </div>
            ) : (
              <>
                <Link href="/aboutus" className="text-gray-300 hover:text-green-400">About Us</Link>
                <Link href="/addlocation" className="text-gray-300 hover:text-green-400">Add your location</Link>
                <Link href="/login" className="text-gray-300 hover:text-green-400">Log in</Link>
                <Link href="/signup" className="text-gray-300 hover:text-green-400">Sign up</Link>
              </>
            )}
            </nav>
          </div>
        </header>

        <main>
          <section className="bg-gradient-to-r from-green-900 to-green-700 py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Discover the best sports turfs near you</h1>
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                <input
                  type="text"
                  placeholder="Search for turf grounds or sports"
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>
          </section>

          <section className="py-12 bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-100">Popular Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {['Football', 'Cricket', 'Basketball', 'Badminton', 'Swimming', 'Table Tennis'].map((category) => (
                  <div key={category} className="bg-gray-700 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1">
                    <Image src="/placeholder.svg?height=80&width=80" alt={category} width={80} height={80} className="mx-auto mb-2" />
                    <p className="font-medium text-gray-200">{category}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-100">Top 3 Featured Turf Grounds</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((turf) => (
                  <div key={turf} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1">
                    <Image src="/placeholder.svg?height=200&width=400" alt={`Turf Ground ${turf}`} width={400} height={200} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 text-gray-100">#{turf} Top Turf Ground</h3>
                      <div className="flex items-center mb-2">
                        <Star className="text-yellow-400 mr-1" size={16} />
                        <span className="text-sm font-medium text-gray-200">4.{6 - turf}</span>
                        <span className="text-sm text-gray-400 ml-2">({1000 - (turf * 100)}+ ratings)</span>
                      </div>
                      <p className="text-sm text-gray-300">Multiple Sports • ₹₹ per hour</p>
                      <p className="text-sm text-gray-300">Open 6 AM - 10 PM • 1.{turf} km away</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-100">Popular Locations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Chennai", "Coimbatore", "Tirupur", "Erode", "Madurai", "Tirunelveli", "Thiruvallur", "Ooty", "Kanyakumari"
                ].map((location, index) => (
                  <div key={location} className="bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-100">{location}</h3>
                    <p className="text-sm text-gray-300">{10 + (index * 2)} Turf Grounds</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold mb-4 text-gray-100">Get the TOREX App</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    We will send you a link, open it on your phone to download the app
                  </p>
                  <div className="flex space-x-4 mb-6">
                    <div className="flex items-center">
                      <input type="radio" id="email" name="app-link" className="mr-2" />
                      <label htmlFor="email" className="text-gray-300">Email</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="phone" name="app-link" className="mr-2" />
                      <label htmlFor="phone" className="text-gray-300">Phone</label>
                    </div>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Email"
                      className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-100"
                    />
                    <button className="bg-green-600 text-white px-6 py-2 rounded-r-md hover:bg-green-700 transition-colors">
                      Share App Link
                    </button>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-gray-400 mb-4">Download app from</p>
                    <div className="flex space-x-4">
                      <Image src="/placeholder.svg?height=40&width=120" alt="App Store" width={120} height={40} className="h-10" />
                      <Image src="/placeholder.svg?height=40&width=120" alt="Google Play" width={120} height={40} className="h-10" />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image src="/placeholder.svg?height=400&width=400" alt="TOREX App" width={400} height={400} className="w-full max-w-md mx-auto" />
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-gray-100">About TOREX</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:text-green-400">Who We Are</Link></li>
                  <li><Link href="#" className="hover:text-green-400">Blog</Link></li>
                  <li><Link href="#" className="hover:text-green-400">Work With Us</Link></li>
                  <li><Link href="#" className="hover:text-green-400">Investor Relations</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-gray-100">For Turf Owners</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:text-green-400">Partner With Us</Link></li>
                  <li><Link href="#" className="hover:text-green-400">Apps For You</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-gray-100">Learn More</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:text-green-400">Privacy</Link></li>
                  <li><Link href="#" className="hover:text-green-400">Security</Link></li>
                  <li><Link href="#" className="hover:text-green-400">Terms</Link></li>
                  <li><Link href="#" className="hover:text-green-400">Sitemap</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-gray-100">Social Links</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="hover:text-green-400">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link href="#" className="hover:text-green-400">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link href="#" className="hover:text-green-400">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-sm text-gray-400">
              <p>&copy; 2023 TOREX. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
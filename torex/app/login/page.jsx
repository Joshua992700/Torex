"use client"
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import supabase from '@/lib/sbconfig'
import headerLogo from "@/app/media/header_logo.png"
import { Button } from "@/components/ui/login/button"
import { Input } from "@/components/ui/login/input"
import { Label } from "@/components/ui/login/label"
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    if (!email || !password) {
      setError('Please fill in all the details.');
      return;
    }
  
    try {
      // Query the user_details table for the email and password
      const { data, error } = await supabase
        .from('user_details')
        .select('*')
        .eq('email', email)
        .eq('password', password); // Check if email and password match
  
      if (error) {
        setError('Error while querying the database.');
        return;
      }
  
      if (data.length === 0) {
        // No match found for email/password
        setError('Invalid email or password.');
        return;
      }
  
      console.log('Login successful:', data);
      router.push('/');
      // Store auth status in localStorage
      localStorage.setItem('auth', JSON.stringify({
        isLoggedIn: true,
        user: data[0], // Storing the user data from the response
      }));

      // On successful login, navigate to the home page
    } catch (error) {
      console.error('Error during login:', error.message);
      setError('An error occurred. Please try again.');
    }
  };
  
  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      if (error) {
        setError('Google login failed.')
        return
      }
      console.log('Google login successful:', data)
      
      // Store auth status in localStorage for Google login
      localStorage.setItem('auth', JSON.stringify({
        isLoggedIn: true,
        user: data.user, // Storing the user data from the response
      }));
      
      router.push('/')
    } catch (error) {
      console.error('Google login error:', error)
      setError('An error occurred during Google login.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <header className="bg-gray-800 shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Image src={headerLogo} alt="TOREX" width={40} height={40} className="h-10" />
            <h1 className="font-bold text-4xl translate-x-4">TOREX</h1>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <Label htmlFor="email-address">Email address</Label>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-100 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm bg-gray-800"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
              </div>
              <div className="relative">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-100 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm bg-gray-800"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-11 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-700 rounded bg-gray-800"
                />
                <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </Label>
              </div>

              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-green-500 hover:text-green-400">
                  Forgot your password?
                </Link>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div>
              <Button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign in
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <Button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
                Continue with Google
              </Button>
            </div>
          </div>

          <p className="mt-2 text-center text-sm text-gray-400">
            Not a member?{' '}
            <Link href="/signup" className="font-medium text-green-500 hover:text-green-400">
              Sign up now
            </Link>
          </p>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; 2024 TOREX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

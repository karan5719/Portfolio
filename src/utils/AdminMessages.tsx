import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import { downloadAllSubmissions } from './excelUtils'

const ADMIN_PASSWORD = "your-secure-password-here" // Change this to a secure password

export default function AdminMessages() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Invalid password')
    }
  }

  const handleDownload = async () => {
    try {
      setIsDownloading(true)
      const success = downloadAllSubmissions()
      
      if (!success) {
        setError('No messages to download or download failed')
      }
    } catch (error) {
      setError('Failed to download messages. Please try again.')
      console.error('Error:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4">
        <Card className="w-full max-w-md bg-[#111] border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-100">Admin Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 text-lg bg-[#1a1a1a] border-gray-800 text-gray-100"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                type="submit"
                className="w-full h-12 text-lg bg-purple-400/10 border border-purple-400/20 text-purple-400 hover:bg-purple-400/20 hover:border-purple-400/30"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-[#111] border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl flex justify-between items-center text-gray-100">
              <span>Contact Form Messages</span>
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className="flex items-center gap-2 px-4 py-2 bg-purple-400/10 border border-purple-400/20 text-purple-400 hover:bg-purple-400/20 hover:border-purple-400/30"
              >
                <Download className="h-4 w-4" />
                {isDownloading ? 'Downloading...' : 'Download Messages'}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <Button
              onClick={() => setIsAuthenticated(false)}
              variant="outline"
              className="text-gray-400 hover:text-gray-300"
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 
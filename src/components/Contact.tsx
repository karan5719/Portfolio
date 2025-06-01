import React, { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, User, ArrowRight, Github, Linkedin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { saveMessage } from '@/utils/api'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields')
      return
    }

    try {
      setIsLoading(true)
      const success = await saveMessage(formData)

      if (success) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      alert('Failed to send message. Please try again.')
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <div className="w-20 h-1 bg-purple-400/50 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-4" />
                <span className="text-gray-300 text-lg">Himanshusingh05719@gmail.com</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 text-purple-400 mr-4" />
                <span className="text-gray-300 text-lg">Based in Kalyani, West Bengal</span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-200 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/karan5719" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/himanshukumar-s/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#111] border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-100">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="h-12 text-lg bg-[#1a1a1a] border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-purple-400/50 focus:ring-purple-400/20"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="h-12 text-lg bg-[#1a1a1a] border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-purple-400/50 focus:ring-purple-400/20"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      rows={5} 
                      className="text-lg bg-[#1a1a1a] border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-purple-400/50 focus:ring-purple-400/20"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg bg-purple-400/10 border border-purple-400/20 text-purple-400 hover:bg-purple-400/20 hover:border-purple-400/30"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
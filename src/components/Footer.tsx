import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
  hoverColor: string
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/karan5719',
      icon: <Github className="h-6 w-6" />,
      hoverColor: 'hover:text-purple-600'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/himanshu-kumar-a67bbb275/',
      icon: <Linkedin className="h-6 w-6" />,
      hoverColor: 'hover:text-blue-600'
    },
  ]

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-700 text-lg">
              ©️ {new Date().getFullYear()} My Portfolio. All rights reserved.
            </span>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${link.name} profile`}
                className={`text-gray-600 transition-colors ${link.hoverColor}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
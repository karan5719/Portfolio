import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/karan5719',
      icon: <Github className="h-6 w-6" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/himanshu-kumar-a67bbb275/',
      icon: <Linkedin className="h-6 w-6" />,
    },
  ]

  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
      </div>

      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-400 text-lg">
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
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
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
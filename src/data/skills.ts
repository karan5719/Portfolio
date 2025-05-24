import React from 'react'
import { Layout, Server, Palette, Database, GitBranch, Globe, Terminal, Code2 } from 'lucide-react'

export interface Skill {
  name: string
  icon: string
  color?: string
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    icon: '/icons/html5.svg',
    color: '#E44D26'
  },
  {
    name: 'CSS',
    icon: '/icons/css3.svg',
    color: '#1572B6'
  },
  {
    name: 'JavaScript',
    icon: '/icons/javascript.svg',
    color: '#F7DF1E'
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/tailwindcss.svg',
    color: '#38B2AC'
  },
  {
    name: 'Express.js',
    icon: '/icons/express.svg',
    color: '#000000'
  },
  {
    name: 'Node.js',
    icon: '/icons/nodejs.svg',
    color: '#339933'
  },
  {
    name: 'React',
    icon: '/icons/react.svg',
    color: '#61DAFB'
  },
  {
    name: 'Python',
    icon: '/icons/python.svg',
    color: '#3776AB'
  },
  {
    name: 'Machine Learning',
    icon: '/icons/ml.svg',
    color: '#FF6B6B'
  },
  {
    name: 'MySQL',
    icon: '/icons/mysql.svg',
    color: '#00758F'
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    color: '#3178C6'
  }
]

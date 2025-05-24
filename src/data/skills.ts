import React, { JSX } from 'react'
import { 
  Code2, 
  Layout, 
  Database, 
  GitBranch, 
  Terminal,
  Palette,
  Globe,
  Server,
  Settings,
  Cpu
} from 'lucide-react'

export interface Skill {
  name: string
  icon: JSX.Element
}

const iconClasses = {
  frontend: "w-8 h-8 text-purple-500",
  backend: "w-8 h-8 text-blue-500",
  design: "w-8 h-8 text-pink-500",
  database: "w-8 h-8 text-green-500",
  git: "w-8 h-8 text-orange-500",
  web: "w-8 h-8 text-cyan-500",
  terminal: "w-8 h-8 text-gray-500",
  code: "w-8 h-8 text-indigo-500",
  system: "w-8 h-8 text-yellow-500",
  performance: "w-8 h-8 text-red-500"
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    icon: React.createElement(Layout, { className: iconClasses.frontend })
  },
  {
    name: 'PYTHON',
    icon: React.createElement(Server, { className: iconClasses.backend })
  },
  {
    name: 'CSS',
    icon: React.createElement(Palette, { className: iconClasses.design })
  },
  {
    name: 'MYSQL',
    icon: React.createElement(Database, { className: iconClasses.database })
  },
  {
    name: 'REACT+TYPESCRPIT',
    icon: React.createElement(GitBranch, { className: iconClasses.git })
  },
  {
    name: 'JAVASCRIPT',
    icon: React.createElement(Globe, { className: iconClasses.web })
  },
  {
    name: 'C PROGRAMMING',
    icon: React.createElement(Terminal, { className: iconClasses.terminal })
  },
  {
    name: 'NUMPY',
    icon: React.createElement(Code2, { className: iconClasses.code })
  },
  {
    name: 'PANDAS',
    icon: React.createElement(Globe, { className: iconClasses.web })
  },
  {
    name: 'Clean Code',
    icon: React.createElement(Code2, { className: iconClasses.code })
  },
]

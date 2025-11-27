'use client'

import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-lg"
    >
      <div className="text-lg font-semibold tracking-[0.3em] uppercase text-white">
        IM
      </div>

      <div className="hidden gap-6 text-sm md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-text-secondary transition-colors hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </div>

      <a
        href="mailto:mahendraiqbal001@gmail.com"
        className="pill text-sm font-medium text-white"
      >
        Available for work
      </a>
    </motion.nav>
  )
}

export default Navbar


'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  github: string
}

const projects: Project[] = [
  {
    title: 'Hegira Ticketing Platform',
    description: 'A web-based travel ticketing experience similar to tiket.com.',
    technologies: ['React', 'Docker', 'Laravel'],
    image: '/hegira.png',
    github: 'https://hegira.id',
  },
  {
    title: 'Petroseal Company Profile',
    description:
      'Corporate site for Petroseal Engineering showcasing engineering services, facilities, and achievements.',
    technologies: ['Next.js'],
    image: '/petroseal.png',
    github: 'https://compro-dusky.vercel.app/',
  },
  {
    title: 'Raz Furniture',
    description: 'Furniture shop website with Next.js storefront.',
    technologies: ['Next.js', 'Bootstrap', 'Express'],
    image: '/raz.png',
    github: 'https://github.com/mahendraiqbal/raz-front-end',
  },
  {
    title: 'Coffee Good Meals',
    description: 'Coffee shop website showcasing menu and loyalty.',
    technologies: ['React', 'Bootstrap', 'Express'],
    image: '/coffee.png',
    github: 'https://github.com/okidwijaya/coffee-good-meals',
  },
  {
    title: 'Simple Dashboard',
    description: 'A simple dashboard experience built with Next.js.',
    technologies: ['Next.js', 'Tailwind', 'Shadcn'],
    image: '/dashboard.png',
    github: 'https://github.com/mahendraiqbal/datacakra',
  },
  {
    title: 'Troya Academic Platform',
    description: 'Mobile app for an academic platform using Flutter.',
    technologies: ['Flutter'],
    image: '/tap.png',
    github: 'https://gitlab.com/mahendra_iqbal/tap',
  },
  {
    title: 'Vehicle Rental',
    description: 'Vehicle rental platform with React-based UI.',
    technologies: ['React', 'Bootstrap', 'Express'],
    image: '/rental.png',
    github: 'https://github.com/mahendraiqbal/vehicle-rental-react',
  },
  {
    title: 'Zwallet',
    description: 'E-wallet experience crafted with Next.js.',
    technologies: ['Next.js', 'Bootstrap', 'Express'],
    image: '/zwallet.png',
    github: 'https://github.com/mahendraiqbal/zwallet',
  },
  {
    title: 'Vehicle Test Drive',
    description: 'React Native app that streamlines test-drive booking.',
    technologies: ['React Native'],
    image: '/pkb.jpeg',
    github: 'https://github.com/mahendraiqbal/PKB',
  },
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding space-y-14">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">Portfolio</p>
        <h2 className="heading mb-4">Selected builds & experiments.</h2>
        <p className="mx-auto max-w-2xl text-base text-text-secondary">
          From dashboards to mobile utilities, these are the projects where I blended engineering
          discipline with playful interfaces.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glow-card overflow-hidden p-6"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-white/5 bg-black/20">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="mt-5 space-y-3">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-text-secondary">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-text-secondary">
                {project.technologies.map((tech) => (
                  <span key={tech} className="pill border-white/5 bg-white/10 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent"
              >
                View repository
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14" strokeLinecap="round" />
                  <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Simple Dashboard",
      description: "This is a simple dashboard that I created using Next Js",
      technologies: ["Next", "Tailwind", "Shadcn"],
      image: "/dashboard.png",
      github: "https://github.com/mahendraiqbal/datacakra",
    },
    {
      title: "Troya Academic Platform",
      description: "Mobile app for academic platform using Flutter",
      technologies: ["Flutter"],
      image: "/tap.png",
      github: "https://gitlab.com/mahendra_iqbal/tap"
    },
    {
      title: "Coffee Good Meals",
      description: "This is a Coffee Shop website using React Js",
      technologies: ["React Js", "Bootstrap", "Express"],
      image: "/coffee.png",
      github: "https://github.com/okidwijaya/coffee-good-meals"
    },
    {
      title: "Vehicle Rental",
      description: "This is a Rental Vehicle website using React Js",
      technologies: ["React Js", "Bootstrap", "Express"],
      image: "/rental.png",
      github: "https://github.com/mahendraiqbal/vehicle-rental-react"
    },
    {
      title: "Zwallet",
      description: "This is a E-Wallet website using Next Js",
      technologies: ["Next Js", "Bootstrap", "Express"],
      image: "/zwallet.png",
      github: "https://github.com/mahendraiqbal/zwallet"
    },
    {
      title: "Raz Furniture",
      description: "This is a Furniture Shop website using Next Js",
      technologies: ["Next Js", "Bootstrap", "Express"],
      image: "/raz.png",
      github: "https://github.com/mahendraiqbal/raz-front-end"
    },
    {
      title: "Vehicle Test Drive",
      description: "Mobile app for vehicle test drive using React Native",
      technologies: ["React Native"],
      image: "/pkb.jpeg",
      github: "https://github.com/mahendraiqbal/PKB"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="section-padding">
      <motion.h2 
        className="heading text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-accent px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects 
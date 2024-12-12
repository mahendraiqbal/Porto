'use client'
import { motion } from 'framer-motion'

interface QuickFact {
  icon: string;
  text: string;
}

const About: React.FC = () => {
  const quickFacts: QuickFact[] = [
    { icon: "🎓", text: "Associate Degree in Manajemen Informatics" },
    { icon: "💼", text: "Currently working at PT BANK CIMB Niaga" },
    { icon: "📍", text: "Based in South Tangerang, Indonesia" },
    { icon: "🌱", text: "Always learning new technologies" },
    { icon: "💡", text: "Passionate about problem-solving" },
    { icon: "🤝", text: "Open to collaboration" }
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
    <section id="about" className="section-padding">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="heading text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <motion.div variants={itemVariants}>
            <div className="prose prose-lg">
              <motion.p 
                className="text-lg text-text-secondary mb-6"
                variants={itemVariants}
              >
                I&apos;m a passionate software engineer with expertise in building modern web applications.
                With 2 years of experience in the industry, I&apos;ve worked on various projects
                ranging from e-commerce platforms to enterprise solutions.
              </motion.p>
              <motion.p 
                className="text-lg text-text-secondary"
                variants={itemVariants}
              >
                My technical journey began with a degree in IT specifically Information Management,
                and since then I have developed a strong foundation in full stack development,
                cloud computing, and software architecture. I am particularly interested in creating 
                scalable solutions and improving user experience.
              </motion.p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-accent">Quick Facts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
                >
                  <span className="text-2xl">{fact.icon}</span>
                  <span className="text-text-secondary">{fact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let&apos;s work together</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About 
'use client'
import { motion } from 'framer-motion'

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategories {
  [key: string]: Skill[];
}

const Skills: React.FC = () => {
  const skills: SkillCategories = {
    "Frontend": [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Vue", icon: "🟢" },
      { name: "Flutter", icon: "🟢" }
    ],
    "Backend": [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Laravel", icon: "🟢" },
      { name: "SQL", icon: "📊" }
    ],
    "Tools & Others": [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "Agile", icon: "🔄" }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <motion.h2 
        className="heading text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </motion.h2>
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {Object.entries(skills).map(([category, skillList]) => (
          <motion.div 
            key={category}
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-accent">{category}</h3>
            <div className="grid grid-cols-2 gap-3">
              {skillList.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gray-50 rounded-lg p-3"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-text-secondary">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills 
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl: string;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      title: "Belajar Dasar Pemrograman Javascript",
      issuer: "Dicoding",
      date: "2024",
      image: "/javascript.png",
      credentialUrl: "https://www.dicoding.com/dicodingassets/coursecertificate/26d5971007cfa9da1ac815d0502ef8e3e96d435e/view",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      date: "2024",
      image: "/web.png",
      credentialUrl: "https://www.dicoding.com/dicodingassets/coursecertificate/1b176dce72fd52d884fa4dcc1a6c3311b9cee422/view",
    },
    // Add more certificates as needed
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
    <section id="certificates" className="section-padding">
      <motion.h2 
        className="heading text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Certificates & Achievements
      </motion.h2>
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
          >
            <div className="relative h-48">
              <Image
                src={certificate.image}
                alt={certificate.title}
                layout="fill"
                objectFit="contain"
                className="p-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
              <div className="flex flex-col gap-2 text-text-secondary">
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {certificate.issuer}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {certificate.date}
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Verify Certificate
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Certificates
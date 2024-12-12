'use client'
import { motion } from 'framer-motion'
import { FormEvent } from 'react'

const Contact: React.FC = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Get form data
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
    
    // Construct WhatsApp message
    const whatsappMessage = `*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`
    
    // Replace this with your phone number (include country code without +)
    const phoneNumber = '081215806730'
    
    // Open WhatsApp in new tab
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank')
  }

  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={formVariants}
        className="max-w-2xl mx-auto"
      >
        <h2 className="heading text-center">Get in Touch</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-gray-50"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-gray-50"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-gray-50"
                placeholder="How can I help you?"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-gray-50"
                placeholder="Your message here..."
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 
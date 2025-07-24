'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Mail, Phone, MapPin, Send, ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "What services does CodeHive Labs offer?",
    answer: "We offer comprehensive software development services including web development, mobile app development, AI & machine learning solutions, and blockchain development. Our team specializes in cutting-edge technologies and innovative solutions."
  },
  {
    id: 2,
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary depending on complexity and scope. Simple websites might take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the initial consultation and keep you updated throughout the development process."
  },
  {
    id: 3,
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature additions. We believe in building long-term relationships with our clients."
  },
  {
    id: 4,
    question: "What technologies do you work with?",
    answer: "We work with a wide range of technologies including React, Vue.js, Node.js, Python, React Native, Flutter, TensorFlow, Solidity, and many more. We choose the best technology stack based on your specific project requirements."
  },
  {
    id: 5,
    question: "How do you handle project communication and updates?",
    answer: "We maintain transparent communication through regular video calls, progress reports, and project management tools. You'll have direct access to your project team and receive weekly updates on development progress."
  },
  {
    id: 6,
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on complexity, features, and timeline. We provide detailed quotes after understanding your requirements. We offer flexible payment terms and can work within various budgets."
  }
]

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/mrblplrd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Contact Form - ${formData.subject}`,
          _captcha: false
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id)
  }

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <Code className="text-3xl" />
              <span>CodeHive Labs</span>
            </div>
            
            <div className="nav-menu">
              <Link href="/" className="nav-link">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
              <Link href="/gallery" className="nav-link">
                <i className="fas fa-project-diagram"></i>
                <span>Projects</span>
              </Link>
              <Link href="/contact" className="nav-link">
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <motion.div 
              className="contact-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="contact-title">Get In Touch</h1>
              <p className="contact-subtitle">
                Ready to start your next project? Let's discuss how we can bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
              <Link href="/" className="back-link">
                <ChevronLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-content">
              {/* Contact Form */}
              <motion.div 
                className="contact-form-container"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Send Us a Message</h2>
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="Blockchain Development">Blockchain Development</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="success-message">
                      <i className="fas fa-check-circle"></i>
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="error-message">
                      <i className="fas fa-exclamation-circle"></i>
                      <span>Sorry, there was an error sending your message. Please try again.</span>
                    </div>
                  )}
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="contact-info"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2>Contact Information</h2>
                <p>Get in touch with us through any of these channels. We're here to help bring your ideas to life.</p>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="contact-details">
                      <h3>Email</h3>
                      <p>codehivelabs@gmail.com</p>
                      <span>We'll respond within 24 hours</span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="contact-details">
                      <h3>Phone</h3>
                      <p>+91 8089965858</p>
                      <span>Available Mon-Fri, 9AM-6PM</span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="contact-details">
                      <h3>Location</h3>
                      <p>Tamil Nadu, India</p>
                      <span>Remote work available worldwide</span>
                    </div>
                  </div>
                </div>

                <div className="social-contact">
                  <h3>Follow Us</h3>
                  <div className="social-links">
                    <a href="https://github.com/codehivelabs" className="social-link">
                      <i className="fab fa-github"></i>
                      <span>GitHub</span>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-linkedin"></i>
                      <span>LinkedIn</span>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <motion.div 
              className="faq-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="faq-subtitle">
                Find answers to common questions about our services, process, and what to expect when working with us.
              </p>
              
              <div className="faq-list">
                {faqs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    className={`faq-item ${activeFaq === faq.id ? 'active' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span>{faq.question}</span>
                      {activeFaq === faq.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-about">
              <div className="logo-section">
                <Code className="text-3xl" />
                <span>CodeHive Labs</span>
              </div>
              <p>Where innovation meets code. Building the future, one project at a time with cutting-edge technology and creative solutions.</p>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>codehivelabs@gmail.com</span>
                </div>
                <div className="footer-contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+91 8089965858</span>
                </div>
                <div className="footer-contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4>Connect With Us</h4>
              <p>Follow us on social media for the latest updates, tech insights, and project showcases.</p>
              <div className="social-links">
                <a href="https://github.com/codehivelabs" className="social-link">
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                  <span>Twitter</span>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="footer-testimonials">
            <h3>What Our Clients Say</h3>
            <div className="testimonials-grid">
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>"CodeHive Labs delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Sarah Johnson</h4>
                    <span>CEO, TechStart Inc.</span>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>"Working with CodeHive Labs was a game-changer for our business. They transformed our ideas into a powerful mobile app that our users love."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Michael Chen</h4>
                    <span>Founder, InnovateMobile</span>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>"The AI chatbot they built for our customer service has improved our response time by 80%. Highly recommended for any tech project!"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Emily Rodriguez</h4>
                    <span>CTO, DataFlow Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 CodeHive Labs. All rights reserved. | Built with <i className="fas fa-heart"></i> and <i className="fas fa-coffee"></i> | Crafted for Innovation</p>
          </div>
        </div>
      </footer>
    </>
  )
} 
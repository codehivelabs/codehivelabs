'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Rocket, Mail, Laptop, Smartphone, Database, Bot, Users, Clock, Star, ChevronUp } from 'lucide-react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // Back to top functionality
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-button"></span>
              <span className="terminal-button"></span>
              <span className="terminal-button"></span>
            </div>
            <div className="terminal-body">
              <span className="typing-text">Initializing CodeHive Labs...</span>
              <span className="cursor">|</span>
            </div>
          </div>
        </div>
      </div>
    )
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
        <section className="hero">
          <div className="hero-background">
            <div className="matrix-bg"></div>
          </div>
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                <span className="glitch" data-text="CodeHive Labs">CodeHive Labs</span>
              </h1>
              <p className="hero-subtitle">Where Innovation Meets Code</p>
              <p className="hero-description">
                Transform your ideas into reality! We specialize in cutting-edge software development, 
                AI/ML solutions, web applications, and innovative coding projects. From startups to enterprises - we've got you covered!
              </p>
              <div className="hero-buttons">
                <Link href="/gallery" className="btn btn-primary">
                  <Rocket className="w-5 h-5" />
                  View Projects
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="code-animation">
                <div className="code-line"><span className="keyword">function</span> <span className="function">initializeProject</span>() {`{`}</div>
                <div className="code-line indent">console.<span className="method">log</span>(<span className="string">"Welcome to CodeHive Labs"</span>);</div>
                <div className="code-line indent"><span className="keyword">return</span> <span className="string">"Innovation"</span>;</div>
                <div className="code-line">{`}`}</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What We Do
            </motion.h2>
            <div className="features-grid">
              <motion.div 
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <Laptop className="w-16 h-16" />
                </div>
                <h3>Web Development</h3>
                <p>Modern, responsive websites and web applications built with cutting-edge technologies like React, Node.js, Django, and more.</p>
              </motion.div>
              
              <motion.div 
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <Smartphone className="w-16 h-16" />
                </div>
                <h3>Mobile Applications</h3>
                <p>Cross-platform mobile applications for iOS and Android with native performance using React Native, Flutter, and more.</p>
              </motion.div>
              
              <motion.div 
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <Database className="w-16 h-16" />
                </div>
                <h3>AI & Machine Learning</h3>
                <p>Intelligent solutions powered by artificial intelligence and machine learning algorithms using Python, TensorFlow, and more.</p>
              </motion.div>
              
              <motion.div 
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <Bot className="w-16 h-16" />
                </div>
                <h3>Backend Systems</h3>
                <p>Robust server-side solutions, APIs, and database architectures for scalable applications using Django, Node.js, and more.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Categories Section */}
        <section className="project-categories">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <div className="categories-grid">
              <motion.div 
                className="category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="category-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h3>AI & Machine Learning</h3>
                <p>Chatbots, Image Recognition, Predictive Analytics, NLP Projects</p>
                <div className="price-tag">Custom Pricing</div>
              </motion.div>
              
              <motion.div 
                className="category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="category-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>Mobile Applications</h3>
                <p>Android/iOS Apps, Cross-platform Solutions, E-commerce Apps</p>
                <div className="price-tag">Custom Pricing</div>
              </motion.div>
              
              <motion.div 
                className="category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="category-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>Web Development</h3>
                <p>E-commerce Platforms, Management Systems, Portfolio Websites</p>
                <div className="price-tag">Custom Pricing</div>
              </motion.div>
              
              <motion.div 
                className="category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="category-icon">
                  <i className="fas fa-link"></i>
                </div>
                <h3>Blockchain Development</h3>
                <p>Smart Contracts, Cryptocurrency Wallets, DeFi Applications</p>
                <div className="price-tag">Custom Pricing</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about">
          <div className="container">
            <div className="about-content">
              <motion.div 
                className="about-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title">About CodeHive Labs</h2>
                <p>
                  We are a passionate team of developers, designers, and innovators dedicated to 
                  creating exceptional digital experiences. Our mission is to transform ideas into 
                  reality through elegant code and cutting-edge technology. From startups to enterprises, 
                  we deliver solutions that drive success.
                </p>
                                  <div className="stats">
                    <motion.div 
                      className="stat"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="stat-number">25+</span>
                      <span className="stat-label">Projects Completed</span>
                    </motion.div>
                    <motion.div 
                      className="stat"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="stat-number">100%</span>
                      <span className="stat-label">Client Satisfaction</span>
                    </motion.div>
                    <motion.div 
                      className="stat"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="stat-number">24/7</span>
                      <span className="stat-label">Support Available</span>
                    </motion.div>
                  </div>
              </motion.div>
              
              <motion.div 
                className="about-visual"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="tech-stack">
                  <div className="tech-item" data-tech="JavaScript">
                    <i className="fab fa-js-square"></i>
                  </div>
                  <div className="tech-item" data-tech="Python">
                    <i className="fab fa-python"></i>
                  </div>
                  <div className="tech-item" data-tech="React">
                    <i className="fab fa-react"></i>
                  </div>
                  <div className="tech-item" data-tech="Node.js">
                    <i className="fab fa-node-js"></i>
                  </div>
                  <div className="tech-item" data-tech="Docker">
                    <i className="fab fa-docker"></i>
                  </div>
                  <div className="tech-item" data-tech="AWS">
                    <i className="fab fa-aws"></i>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

                {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <motion.div 
              className="cta-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Ready to Start Your Next Project?</h2>
              <p>Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions. From concept to deployment, we've got you covered!</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-large">
                  <Mail className="w-5 h-5" />
                  Start Your Project
                </Link>
                <Link href="/gallery" className="btn btn-secondary btn-large">
                  <Rocket className="w-5 h-5" />
                  View Our Work
                </Link>
              </div>
              <div className="offer-badge">
                <span className="offer-text">
                  <i className="fas fa-lightbulb"></i>
                  Free Consultation Available
                </span>
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

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </>
  )
}

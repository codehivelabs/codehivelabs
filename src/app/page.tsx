'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Rocket, Mail, Laptop, Smartphone, Database, Bot, ChevronUp } from 'lucide-react'

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [typedCount, setTypedCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const codeRef = useRef<HTMLDivElement | null>(null)

  // Define the code to type as syntax-highlighted segments
  const codeSegments = useMemo(
    () => [
      { text: 'function', className: 'keyword' },
      { text: ' ' },
      { text: 'initializeProject', className: 'function' },
      { text: '() ' },
      { text: '{' },
      { text: '\n' },
      { text: '  ' },
      { text: 'console', className: 'method' },
      { text: '.' },
      { text: 'log', className: 'method' },
      { text: '(' },
      { text: '"Welcome to CodeHive Labs"', className: 'string' },
      { text: ');' },
      { text: '\n' },
      { text: '  ' },
      { text: 'return', className: 'keyword' },
      { text: ' ' },
      { text: '"Innovation"', className: 'string' },
      { text: ';' },
      { text: '\n' },
      { text: '}' },
      { text: '\n' },
    ],
    []
  )

  const totalChars = useMemo(() => codeSegments.reduce((sum, seg) => sum + (seg.text === '\n' ? 0 : seg.text.length), 0), [codeSegments])

  useEffect(() => {
    // Back to top functionality
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Observe when code block is in view
  useEffect(() => {
    if (!codeRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsInView(entry.isIntersecting))
      },
      { threshold: 0.2 }
    )
    observer.observe(codeRef.current)
    return () => observer.disconnect()
  }, [])

  // Typewriter effect (single run when visible)
  useEffect(() => {
    if (!isInView) return
    setTypedCount(0)
    const TYPING_MS = 60
    let intervalId: number | undefined
    intervalId = window.setInterval(() => {
      setTypedCount((prev) => {
        if (prev >= totalChars) {
          if (intervalId) window.clearInterval(intervalId)
          return prev
        }
        return prev + 1
      })
    }, TYPING_MS)
    return () => {
      if (intervalId) window.clearInterval(intervalId)
    }
  }, [isInView, totalChars])

  // Build the rendered segments based on typedCount
  const renderedSegments = useMemo(() => {
    let remaining = typedCount
    const nodes: React.ReactNode[] = []
    codeSegments.forEach((seg, i) => {
      if (seg.text === '\n') {
        nodes.push(<br key={`br-${i}`} />)
        return
      }
      const take = Math.max(0, Math.min(seg.text.length, remaining))
      const partial = seg.text.slice(0, take)
      if (partial.length > 0) {
        if (seg.className) {
          nodes.push(
            <span key={`seg-${i}`} className={seg.className}>
              {partial}
            </span>
          )
        } else {
          nodes.push(
            <span key={`seg-${i}`}>{partial}</span>
          )
        }
      }
      remaining -= take
    })
    return nodes
  }, [typedCount, codeSegments])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  

  return (
    <>
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
                AI/ML solutions, web applications, and innovative coding projects. From startups to enterprises - we&apos;ve got you covered!
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
              <div ref={codeRef} className="code-animation">
                <pre className="code-pre">
                  {renderedSegments}
                  <span className="typing-cursor">|</span>
                </pre>
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
                              <p>Let&apos;s collaborate to bring your vision to life with cutting-edge technology and innovative solutions. From concept to deployment, we&apos;ve got you covered!</p>
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

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, ExternalLink, Github, Filter, ChevronLeft } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    image: "/images/projects/ecom.gif",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/codehivelabs/ecommerce-platform",
    live: "https://ecommerce-demo.codehivelabs.com",
    featured: true
  },
  {
    id: 2,
    title: "AI Chatbot Assistant",
    description: "An intelligent chatbot powered by machine learning algorithms. Provides customer support, answers queries, and learns from user interactions.",
    image: "/images/projects/chatbot.gif",
    category: "AI & Machine Learning",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com/codehivelabs/ai-chatbot",
    live: "https://chatbot-demo.codehivelabs.com",
    featured: true
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    description: "Cross-platform mobile application for fitness tracking and workout planning. Includes GPS tracking, progress analytics, and social features.",
    image: "/images/projects/fit.gif",
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    github: "https://github.com/codehivelabs/fitness-app",
    live: "https://fitness-app.codehivelabs.com",
    featured: false
  },
  {
    id: 4,
    title: "Real-time Dashboard",
    description: "Interactive dashboard for data visualization and analytics. Real-time updates, customizable widgets, and comprehensive reporting.",
    image: "/images/projects/viz.gif",
    category: "Web Development",
    technologies: ["Vue.js", "D3.js", "WebSocket", "PostgreSQL"],
    github: "https://github.com/codehivelabs/dashboard",
    live: "https://dashboard-demo.codehivelabs.com",
    featured: false
  },
  {
    id: 5,
    title: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet with multi-chain support. Features include transaction history, portfolio tracking, and DeFi integration.",
    image: "/images/projects/block.gif",
    category: "Blockchain",
    technologies: ["Solidity", "Web3.js", "React", "MetaMask"],
    github: "https://github.com/codehivelabs/wallet",
    live: "https://wallet-demo.codehivelabs.com",
    featured: false
  },
  {
    id: 6,
    title: "Image-Recoginition System",
    description: "Computer vision system for object detection and image classification using deep learning.",
    image: "/images/projects/face.gif",
    category: "AI & Machine Learning",
    technologies: ["OpenCV", "Socket.io", "Python", "MongoDB", "Pytorch"],
    github: "https://github.com/codehivelabs/chat-app",
    live: "https://chat-demo.codehivelabs.com",
    featured: false
  }
]

const categories = ["All", "Web Development", "Mobile Development", "AI & Machine Learning", "Blockchain"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === category))
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
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
            
            <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <Link href="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
              <Link href="/gallery" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-project-diagram"></i>
                <span>Projects</span>
              </Link>
              <Link href="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </Link>
            </div>
            
            <button className="nav-toggle" onClick={toggleMobileMenu}>
              <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="gallery-hero">
          <div className="container">
            <motion.div 
              className="gallery-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="gallery-title">Our Projects</h1>
              <p className="gallery-subtitle">
                Explore our portfolio of innovative projects that showcase cutting-edge technology and creative solutions.
              </p>
              <Link href="/" className="back-link">
                <ChevronLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="filter-section">
          <div className="container">
            <motion.div 
              className="filter-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="filter-header">
                <Filter className="w-5 h-5" />
                <span>Filter by Category</span>
              </div>
              <div className="filter-buttons">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-section">
          <div className="container">
            <motion.div 
              className="projects-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`project-card ${project.featured ? 'featured' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="project-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-screenshot"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="image-placeholder hidden">
                      <Code className="w-16 h-16" />
                    </div>
                    {project.featured && (
                      <div className="featured-badge">
                        <span>Featured</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="project-content">
                    <div className="project-category">{project.category}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    

                    
                    <div className="project-technologies">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link live"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {filteredProjects.length === 0 && (
              <motion.div 
                className="no-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Code className="w-16 h-16" />
                <h3>No projects found</h3>
                <p>No projects match the selected category. Try selecting a different filter.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="gallery-cta">
          <div className="container">
            <motion.div 
              className="cta-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Ready to Start Your Project?</h2>
                              <p>Let&apos;s collaborate to bring your vision to life with cutting-edge technology and innovative solutions.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-large">
                  <i className="fas fa-envelope"></i>
                  Start Your Project
                </Link>
                <Link href="/" className="btn btn-secondary btn-large">
                  <i className="fas fa-home"></i>
                  Back to Home
                </Link>
              </div>
                              <div className="offer-badge">
                  <span className="offer-text">
                    <i className="fas fa-comments"></i>
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
                  <p>&quot;CodeHive Labs delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding.&quot;</p>
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
                  <p>&quot;Working with CodeHive Labs was a game-changer for our business. They transformed our ideas into a powerful mobile app that our users love.&quot;</p>
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
                  <p>&quot;The AI chatbot they built for our customer service has improved our response time by 80%. Highly recommended for any tech project!&quot;</p>
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
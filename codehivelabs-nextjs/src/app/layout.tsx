import type { Metadata } from 'next'
import { Code } from 'lucide-react'
import { Inter, Orbitron, Share_Tech_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})
const shareTechMono = Share_Tech_Mono({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CodeHive Labs - Professional Project Center',
  description: 'CodeHive Labs - Professional Project Center for Innovative Coding Solutions. Specializing in cutting-edge software development, web applications, and innovative coding solutions.',
  keywords: 'coding, projects, development, programming, software, web development, mobile apps, AI, machine learning',
  authors: [{ name: 'CodeHive Labs' }],
  creator: 'CodeHive Labs',
  publisher: 'CodeHive Labs',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://codehivelabs.com',
  },
  openGraph: {
    title: 'CodeHive Labs - Professional Project Center',
    description: 'Professional project center specializing in cutting-edge software development, web applications, and innovative coding solutions.',
    url: 'https://codehivelabs.com',
    siteName: 'CodeHive Labs',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeHive Labs - Professional Project Center',
    description: 'Professional project center specializing in cutting-edge software development, web applications, and innovative coding solutions.',
  },
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  themeColor: '#00ff41',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${shareTechMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CodeHive Labs',
              url: 'https://codehivelabs.com',
              logo: '/favicon.ico',
              sameAs: [
                'https://github.com/codehivelabs'
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  email: 'codehivelabs@gmail.com',
                  telephone: '+91 8089965858',
                  contactType: 'customer support',
                  availableLanguage: ['en'],
                  areaServed: 'IN'
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${orbitron.variable} ${shareTechMono.variable}`}>
        <Header />

        {children}

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
      </body>
    </html>
  )
}

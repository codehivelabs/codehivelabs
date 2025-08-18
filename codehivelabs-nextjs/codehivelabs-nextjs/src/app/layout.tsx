import type { Metadata } from 'next'
import { Inter, Orbitron, Share_Tech_Mono } from 'next/font/google'
import './globals.css'

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
  viewport: 'width=device-width, initial-scale=1',
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
      </head>
      <body className={`${inter.className} ${orbitron.variable} ${shareTechMono.variable}`}>
        {children}
      </body>
    </html>
  )
}

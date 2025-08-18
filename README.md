# CodeHive Labs - Next.js Website

A modern, responsive website for CodeHive Labs built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Hacker Theme**: Cyberpunk-inspired design with neon green accents
- **Interactive Components**: Smooth animations powered by Framer Motion
- **Form Integration**: Contact form with Formspree integration
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized for speed with Next.js optimizations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Formspree
- **Fonts**: Orbitron, Share Tech Mono
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
codehivelabs-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and custom CSS
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Homepage
│   │   ├── gallery/
│   │   │   └── page.tsx         # Projects gallery page
│   │   └── contact/
│   │       └── page.tsx         # Contact page with form
│   └── components/              # Reusable components (future)
├── public/                      # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Primary Green**: #00ff41 (Matrix green)
- **Secondary Green**: #00cc33
- **Neon Green**: #39ff14
- **Dark Background**: #000000
- **Glass Effects**: Backdrop blur and transparency

### Typography
- **Headings**: Orbitron (futuristic, tech-focused)
- **Body Text**: Share Tech Mono (terminal-style)
- **Fallback**: System fonts

### Animations
- **Loading Screen**: Terminal-style initialization
- **Scroll Animations**: Framer Motion powered
- **Hover Effects**: Smooth transitions and transforms
- **Glitch Effects**: CSS-based text glitch animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd codehivelabs-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

### Homepage (`/`)
- Hero section with animated code
- Features showcase
- About section with stats
- Call-to-action
- Footer with testimonials

### Gallery (`/gallery`)
- Project showcase with filtering
- Category-based filtering
- Project cards with technologies
- Links to GitHub and live demos

### Contact (`/contact`)
- Contact form with Formspree integration
- Contact information
- FAQ section
- Social media links

## 🔧 Configuration

### Formspree Setup
The contact form is configured to use Formspree. Update the endpoint in `src/app/contact/page.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_ENDPOINT', {
  // ... configuration
})
```

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint
```

## 🎯 Customization

### Colors
Update CSS variables in `src/app/globals.css`:

```css
:root {
  --primary-green: #00ff41;
  --secondary-green: #00cc33;
  --neon-green: #39ff14;
  /* ... other colors */
}
```

### Content
- **Projects**: Update the `projects` array in `src/app/gallery/page.tsx`
- **FAQs**: Modify the `faqs` array in `src/app/contact/page.tsx`
- **Contact Info**: Update contact details in both pages
- **Testimonials**: Edit testimonials in the footer sections

### Styling
- **Custom CSS**: Add styles to `src/app/globals.css`
- **Tailwind**: Use Tailwind classes or extend the config
- **Animations**: Modify Framer Motion animations

## 📦 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory
3. Configure redirects for Next.js routing

### Other Platforms
The project is compatible with any static hosting platform that supports Next.js.

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for better search results
- **Sitemap**: Auto-generated sitemap (Next.js feature)
- **Robots.txt**: Search engine crawling optimization

## 🎨 Design System

### Components
- **Buttons**: Primary, secondary, and large variants
- **Cards**: Project cards, feature cards, testimonial cards
- **Forms**: Styled form inputs with validation
- **Navigation**: Responsive navigation with mobile menu
- **Footer**: Multi-section footer with social links

### Animations
- **Page Transitions**: Smooth page-to-page navigation
- **Scroll Animations**: Elements animate on scroll
- **Hover Effects**: Interactive hover states
- **Loading States**: Form submission and page loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: codehivelabs@gmail.com
- Phone: +91 8089965858
- GitHub Issues: Create an issue in the repository

## 🔮 Future Enhancements

- [ ] Blog section
- [ ] Portfolio filtering improvements
- [ ] Dark/Light theme toggle
- [ ] Internationalization (i18n)
- [ ] CMS integration
- [ ] Performance monitoring
- [ ] Analytics integration
- [ ] PWA features

---

**Built with ❤️ by CodeHive Labs**

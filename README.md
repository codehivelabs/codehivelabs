# CodeHive Labs - Professional Project Center Website

A modern, professional, and luxurious website for a project center with a hacker theme (black and green). Built with HTML, CSS, and JavaScript.

## 🚀 Features

- **Modern Design**: Professional hacker theme with black and green color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Project Gallery**: Filterable project showcase with categories
- **Contact Form**: Professional contact form with validation
- **FAQ Section**: Interactive accordion-style FAQ
- **Loading Screen**: Animated terminal-style loading screen
- **Smooth Scrolling**: Enhanced user experience with smooth scrolling
- **Back to Top**: Convenient back-to-top button
- **Mobile Navigation**: Hamburger menu for mobile devices

## 🎨 Design Features

- **Hacker Theme**: Black background with neon green accents
- **Typography**: Orbitron and Share Tech Mono fonts for that tech feel
- **Animations**: Glitch effects, typing animations, and smooth transitions
- **Icons**: Font Awesome icons throughout the interface
- **Matrix Background**: Animated matrix-style background effects

## 📁 File Structure

```
project_center_website/
├── index.html                 # Main entry point
├── README.md                  # This file
├── static/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── js/
│   │   └── script.js         # JavaScript functionality
│   └── assets/
│       ├── images/
│       │   └── placeholder.html  # Placeholder images generator
│       └── videos/           # Video assets (if any)
└── templates/
    ├── base.html             # Base template with navigation and footer
    ├── home.html             # Homepage with hero section and features
    ├── gallery.html          # Projects gallery with filtering
    └── contact.html          # Contact page with form and FAQ
```

## 🛠️ Setup Instructions

### Option 1: Simple Setup (Recommended)
1. Download or clone this repository
2. Open `index.html` in your web browser
3. The website will automatically redirect to the homepage

### Option 2: Local Server Setup
1. Download or clone this repository
2. Open a terminal/command prompt in the project directory
3. Start a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server
```

**Using PHP:**
```bash
php -S localhost:8000
```

4. Open your browser and navigate to `http://localhost:8000`

## 📱 Pages Overview

### Homepage (`templates/home.html`)
- Hero section with animated code display
- Features showcase
- About section with statistics
- Technology stack display
- Call-to-action section

### Projects Gallery (`templates/gallery.html`)
- Filterable project grid
- Project categories (Web, Mobile, AI/ML, Backend)
- Project cards with hover effects
- Technology tags for each project
- Project statistics

### Contact Page (`templates/contact.html`)
- Contact information with icons
- Professional contact form
- Social media links
- FAQ section with accordion
- Form validation and notifications

## 🎯 Customization

### Colors
The color scheme is defined in CSS variables in `static/css/style.css`:

```css
:root {
    --primary-green: #00ff41;
    --secondary-green: #00cc33;
    --dark-green: #00802b;
    --light-green: #66ff66;
    --black: #000000;
    --dark-gray: #111111;
    --medium-gray: #222222;
    --light-gray: #333333;
    --white: #ffffff;
    --off-white: #f0f0f0;
}
```

### Content
- Update project information in `templates/gallery.html`
- Modify contact details in `templates/contact.html`
- Change company information in `templates/base.html`
- Update FAQ content in `templates/contact.html`

### Images
- Replace placeholder images in the gallery with actual project screenshots
- Use the `static/assets/images/placeholder.html` file to generate placeholder images
- Recommended image size: 400x300 pixels

## 🔧 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form

The contact form includes:
- Name, email, phone, company fields
- Project type and budget selection
- Message textarea
- Newsletter subscription option
- Form validation
- Success/error notifications

## 🎨 Animations and Effects

- **Loading Screen**: Terminal-style typing animation
- **Glitch Effect**: Random glitch effect on hero title
- **Hover Effects**: Cards lift and glow on hover
- **Scroll Animations**: Elements animate in as you scroll
- **Typing Effect**: Code lines type out character by character
- **Matrix Background**: Animated gradient background

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Touch-friendly buttons and forms
- Optimized typography for small screens

## 🚀 Performance Features

- Optimized CSS with CSS variables
- Efficient JavaScript with event delegation
- Debounced scroll events
- Lazy loading for animations
- Minimal external dependencies

## 🔒 Security Considerations

- Form validation on both client and server side
- XSS protection through proper input sanitization
- CSRF protection for forms (implement on server)
- Secure headers (implement on server)

## 📈 SEO Features

- Semantic HTML structure
- Meta tags for description and keywords
- Proper heading hierarchy
- Alt text for images
- Open Graph meta tags (can be added)

## 🛠️ Development

To modify the website:

1. **HTML**: Edit the template files in the `templates/` directory
2. **CSS**: Modify `static/css/style.css`
3. **JavaScript**: Update `static/js/script.js`
4. **Images**: Replace images in `static/assets/images/`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 📞 Support

For support or questions:
- Email: hello@codehivelabs.com
- Website: https://codehivelabs.com

---

**Built with ❤️ and ☕ by CodeHive Labs** 
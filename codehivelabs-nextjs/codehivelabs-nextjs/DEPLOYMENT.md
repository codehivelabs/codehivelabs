# Deployment Guide - CodeHive Labs Next.js

This guide covers deploying the CodeHive Labs website to various platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)

**Easiest deployment method:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

**Vercel automatically detects Next.js and configures everything!**

### 2. Netlify

**For static hosting:**

1. **Build the project**
   ```bash
   npm run build:static
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder
   - Or connect your GitHub repository

3. **Configure build settings**
   - Build command: `npm run build:static`
   - Publish directory: `out`

### 3. GitHub Pages

**Free static hosting:**

1. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build:static",
       "deploy": "gh-pages -d out"
     }
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint
```

For production, set these in your hosting platform's environment variables.

## 📝 Formspree Configuration

1. **Get your Formspree endpoint**
   - Go to [formspree.io](https://formspree.io)
   - Create a new form
   - Copy the endpoint URL

2. **Update the contact form**
   - Edit `src/app/contact/page.tsx`
   - Replace `https://formspree.io/f/mrblplrd` with your endpoint

## 🌐 Custom Domain Setup

### Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to your site settings
2. Click "Domain management"
3. Add custom domain
4. Update DNS records

## 🔍 SEO Configuration

The project includes:
- ✅ Meta tags for all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data
- ✅ Sitemap (auto-generated)
- ✅ Robots.txt

## 📊 Performance Optimization

The project is optimized with:
- ✅ Next.js 15 optimizations
- ✅ Static generation
- ✅ Image optimization
- ✅ Code splitting
- ✅ Bundle analysis

## 🛠️ Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Formspree Issues
- Check endpoint URL
- Verify form configuration
- Check browser console for errors

### Styling Issues
- Clear browser cache
- Check CSS imports
- Verify Tailwind configuration

## 📱 Mobile Testing

Test on:
- ✅ Desktop browsers
- ✅ Mobile browsers
- ✅ Tablet browsers
- ✅ Different screen sizes

## 🔒 Security Headers

The project includes security headers in `netlify.toml`:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## 📈 Analytics (Optional)

Add Google Analytics:

1. **Create a Google Analytics account**
2. **Get your tracking ID**
3. **Add to layout.tsx**

```typescript
// Add to src/app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## 🎯 Final Checklist

Before going live:
- [ ] Test all pages
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test navigation
- [ ] Verify all links work
- [ ] Check loading performance
- [ ] Test on different browsers
- [ ] Verify SEO meta tags
- [ ] Check social media previews

## 🆘 Support

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [README.md](README.md)
3. Create an issue in the repository
4. Contact: codehivelabs@gmail.com

---

**Happy Deploying! 🚀** 
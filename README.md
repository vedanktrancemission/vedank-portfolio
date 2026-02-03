# Vedank Sharma - Portfolio Website

A cutting-edge, modern portfolio website built with 2025 web design trends featuring bento grid layouts, glassmorphism, smooth scroll animations, and interactive micro-interactions. Styled with WhatsApp's iconic color palette and typography.

## 🚀 Features

### Design Elements
- **WhatsApp Theme**: Official WhatsApp color palette (#25D366 green, dark backgrounds)
- **Dark/Light Mode Toggle**: Fully functional theme switcher with glassmorphism styling and animated sun/moon icons
- **Theme Persistence**: User's theme preference saved to localStorage and maintained across page reloads
- **Glassmorphism Effects**: Frosted glass UI components with backdrop blur
- **Bento Grid Layouts**: Modern, asymmetric grid system for skills and content
- **Gradient Orbs**: Animated floating gradient backgrounds
- **Smooth Scroll Animations**: Intersection Observer-based scroll animations
- **Interactive Micro-interactions**: Hover effects, magnetic buttons, card tilt effects
- **Cursor Trail**: Subtle animated cursor following effect
- **Typewriter Effect**: Dynamic role title animation

### Sections
1. **Hero Section**: Dynamic introduction with animated code block, certifications, and stats
2. **Skills Matrix**: Bento grid layout showcasing technical expertise
3. **Project Gallery**: 6 featured projects with case study links and tech stacks
4. **Experience Timeline**: Vertical timeline of professional career journey
5. **Contact Section**: Contact form and information cards

### Technical Features
- **Responsive Design**: Mobile-first approach with breakpoints at 480px, 768px, 1024px
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation, reduced motion support
- **Performance**: Lazy loading, debounced/throttled events, optimized animations
- **SEO**: Meta tags, semantic structure, proper heading hierarchy

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete stylesheet with WhatsApp theme
├── script.js           # Interactive features and animations
└── README.md           # Project documentation
```

## 🎨 Design System

### WhatsApp Color Palette
- **Primary Green**: #25D366 (WhatsApp green)
- **Primary Light**: #128C7E (Lighter green)
- **Primary Dark**: #075E54 (Darker green)
- **Secondary Blue**: #34B7F1 (Accent blue)
- **Background Primary (Dark)**: #0B141A (Dark chat background)
- **Background Secondary (Dark)**: #111B21 (Secondary dark)
- **Background Tertiary (Dark)**: #202C33 (Message bubble background)
- **Background Primary (Light)**: #EFEAE2 (Light chat background)
- **Background Secondary (Light)**: #D1D7DB (Secondary light)
- **Background Tertiary (Light)**: #FFFFFF (White message bubble)
- **Text Primary (Dark)**: #E9EDEF (White text)
- **Text Secondary (Dark)**: #8696A0 (Gray text)
- **Text Tertiary (Dark)**: #667781 (Muted text)
- **Text Primary (Light)**: #111B21 (Dark text)
- **Text Secondary (Light)**: #54656F (Gray text)
- **Text Tertiary (Light)**: #8696A0 (Muted text)

### WhatsApp Typography
- **Sans-serif**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial (WhatsApp's system font stack)
- **Monospace**: 'SF Mono', Monaco, 'Inconsolata', 'Fira Code' (for code blocks)

### Spacing Scale
- xs: 0.25rem, sm: 0.5rem, md: 1rem, lg: 1.5rem
- xl: 2rem, 2xl: 3rem, 3xl: 4rem, 4xl: 6rem

### Border Radius
- sm: 0.375rem, md: 0.5rem, lg: 0.75rem
- xl: 1rem, 2xl: 1.5rem, full: 9999px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Modern JavaScript features
- **No Frameworks**: Pure vanilla JavaScript for optimal performance

## 📦 Installation & Setup

1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process or dependencies required!

### Local Development

Simply open the `index.html` file in your browser:

```bash
# Using Python's built-in server
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## 🌐 Deployment

### Static Hosting Options

#### GitHub Pages
1. Push to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select `main` branch as source

#### Netlify
1. Drag and drop the project folder to Netlify
2. Or connect to Git repository

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

#### AWS S3 + CloudFront
1. Upload files to S3 bucket
2. Configure static website hosting
3. Set up CloudFront CDN

### Custom Domain
Update the domain in your hosting provider's settings and update any hardcoded URLs.

## 🎯 Customization

### Update Personal Information
Edit the following in `index.html`:
- Name and title in Hero section
- Contact information in Contact section
- Project details and links
- Experience timeline entries

### Modify Colors
Update CSS custom properties in `styles.css`:
```css
:root {
    --color-primary: #25D366;
    --color-secondary: #34B7F1;
    --bg-primary: #0B141A;
    /* ... more variables */
}
```

### Add New Projects
Copy a project card in `index.html` and update:
- Company name
- Project title
- Description
- Tech stack tags
- Achievements list

### Adjust Animations
Modify animation timings in `script.js`:
- Typewriter effect speed
- Counter animation duration
- Scroll animation thresholds

### Theme Toggle
The portfolio includes a fully functional dark/light mode toggle:
- **Toggle Button**: Fixed to top-right corner with glassmorphism styling
- **Animated Icons**: Sun and moon icons with smooth transitions
- **Theme Persistence**: User's preference saved to localStorage
- **System Preference**: Automatically detects system theme preference
- **Smooth Transitions**: All elements transition smoothly between themes
- **WhatsApp Aesthetic**: Both themes complement the WhatsApp color palette

To manually set the theme, click the toggle button in the top-right corner. The theme preference is automatically saved and will persist across page reloads.

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Reduced motion support for users with vestibular disorders
- High contrast mode support
- Screen reader friendly

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance Optimization

- CSS custom properties for theming
- Debounced scroll events
- Throttled mouse events
- Intersection Observer for lazy animations
- No external dependencies
- Optimized animations with GPU acceleration

## 🎨 2025 Design Trends Implemented

1. **Bento Grid Layouts**: Asymmetric grid system for content organization
2. **Glassmorphism**: Frosted glass effects with backdrop blur
3. **Micro-interactions**: Subtle hover effects and animations
4. **Gradient Mesh**: Animated gradient backgrounds
5. **Dark Mode First**: Optimized for dark theme (WhatsApp style)
6. **Smooth Scrolling**: Native smooth scroll behavior
7. **Typography-Driven**: Large, bold typography
8. **Minimalist UI**: Clean, uncluttered interface

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Vedank Sharma**
- Full Stack Developer
- Email: vedsharmaamt@gmail.com
- Phone: +91 8149301765

## 🙏 Acknowledgments

- Design inspiration from modern 2025 web design trends
- WhatsApp color palette and typography
- Font: System fonts (Apple, Segoe UI, Roboto)
- Font: SF Mono by Apple

---

Built with ❤️ using modern web technologies

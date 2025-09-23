# Dreamworx Auto Body - Client Website

A modern, high-performance React website for Dreamworx Auto Body, featuring optimized image loading, lazy loading, and modern UI components.

## 🚀 Performance Features

### Image Optimization

- **Lazy Loading**: Images load only when needed using Intersection Observer
- **WebP Support**: Automatic WebP format detection and fallback
- **Responsive Images**: Proper sizing with `sizes` attribute
- **Placeholder Loading**: Skeleton loading states for better UX
- **Image Compression**: 77MB → Optimized for web delivery

### Code Splitting

- **Route-based Splitting**: Each page loads independently
- **Component Lazy Loading**: Heavy components load on demand
- **Bundle Optimization**: Separate chunks for vendor libraries
- **Tree Shaking**: Unused code elimination

### Modern UI/UX

- **Smooth Animations**: CSS transitions and keyframe animations
- **Loading States**: Skeleton loaders and spinners
- **Error Boundaries**: Graceful error handling
- **Accessibility**: ARIA labels and keyboard navigation
- **Responsive Design**: Mobile-first approach

## 📊 Performance Metrics

### Before Optimization

- **Bundle Size**: 196KB JS + 24KB CSS
- **Images**: 77MB unoptimized
- **Load Time**: Slow due to synchronous image loading
- **No Code Splitting**: All code loaded upfront

### After Optimization

- **Bundle Size**: 42KB main + 141KB vendor + 22KB router + 1.5KB emailjs
- **Code Splitting**: 4 separate chunks for better caching
- **Lazy Loading**: Images load as needed
- **Performance Monitoring**: Built-in Web Vitals tracking

## 🛠️ Technologies Used

- **React 18** - UI library with concurrent features
- **Vite** - Lightning-fast build tool
- **React Router 6** - Client-side routing
- **SCSS** - Advanced CSS preprocessing
- **EmailJS** - Email service integration
- **Intersection Observer** - Lazy loading implementation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The development server will start on `http://localhost:3000`

### Building for Production

Build the optimized production version:

```bash
npm run build
```

### Preview Production Build

Preview the production build:

```bash
npm run preview
```

### Image Optimization

Run the image analysis script:

```bash
node scripts/optimize-images.js
```

## 📁 Project Structure

```
src/
├── components/
│   ├── OptimizedImage/           # Lazy-loaded image component
│   ├── OptimizedImageCarousel/   # Performance-optimized carousel
│   ├── OptimizedLogoSlideshow/   # Smooth logo animation
│   ├── ErrorBoundary/            # Error handling component
│   └── ...                       # Other components
├── pages/                        # Lazy-loaded page components
├── styles/                       # SCSS partials and variables
├── utils/                        # Performance utilities
└── main.jsx                      # Application entry point
```

## 🎨 Design System

### Colors

- **Primary Orange**: #d55e15
- **Secondary Orange**: #f8eac6
- **Primary Dark**: #323232
- **Secondary Dark**: #000000

### Typography

- **Font Family**: Plus Jakarta Sans
- **Weights**: 400 (Light), 600 (Medium), 700 (Bold)

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1279px
- **Desktop**: ≥ 1280px

## 🔧 Performance Optimizations

### Image Loading

- Intersection Observer for lazy loading
- WebP format with fallbacks
- Responsive image sizing
- Skeleton loading states

### Code Splitting

- Route-based code splitting
- Component lazy loading
- Vendor library separation
- Dynamic imports

### Bundle Optimization

- Tree shaking for unused code
- CSS code splitting
- Asset inlining for small files
- Gzip compression

## 📈 Monitoring

The application includes built-in performance monitoring:

- Web Vitals tracking
- Bundle size analysis
- Image loading metrics
- Error reporting

## 🚀 Deployment

The project is configured for deployment on:

- **Netlify** (recommended)
- **Vercel**
- **GitHub Pages**
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is proprietary to Dreamworx Auto Body.

## 🆘 Support

For support, email support@dreamworxautobody.com or create an issue in the repository.
